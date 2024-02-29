"use client";
import React, { useState, useRef, useEffect, use } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import $ from "jquery";
import io from "socket.io-client";
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const socket = io("http://localhost:3001"); // Connect to your signaling server

export default function RoomId({ params }: any) {
  const [transcript, setTranscript] = useState("");
  const [translateText, setTranslateText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [receivedTranslateText, setReceivedTranslateText] = useState("");
  // Send translated text to the signaling server
  // ...

  useEffect(() => {
    // Emit the 'translatedText' event whenever the translated text changes
    if (translateText) {
      socket.emit("translatedText", translateText);
      console.log("emmited");
    }
  }, [translateText]);

  useEffect(() => {
    // Handle the 'translatedText' event
    socket.on("translatedText", (data) => {
      // Handle received translated text
      setReceivedTranslateText(data);
      console.log( `recieved : ${data} `);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off("translatedText");
    };
  }, []);

  useEffect(() => {
    translate();
  }, [transcript]);
  useEffect(() => {
    console.log(translateText);
  }, [translateText]);
  const [selectedLanguage, setSelectedLanguage] = useState("ml");
  const translate = () => {
    const sourceLang = "ml";
    const targetLang = selectedLanguage;
    if (transcript) {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
        transcript
      )}`;

      $.getJSON(url, function (data) {
        setTranslateText(data[0][0][0]);
      });
    }
  };
  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  const myMeeting = async (element: any) => {
    const roomID = params.roomId;
    const appID = 413796643;
    const serverSecret = "df25568f423464aa9ae77b4e88f0de02";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "alan john"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      showPreJoinView: true, // Ensure that the prejoin view is enabled
      preJoinViewConfig: {
        title: "Your Text Here", // Set the title to your desired text
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: "https://localhost:3000/room/${roomID}",
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      onJoinRoom() {
        // Start recording when joined room
        startRecording();
      },

      showScreenSharingButton: false,
    });
  };

  const startRecording = () => {
    // Create a new SpeechRecognition instance and configure it
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "ml-IN";
    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      setIsRecording(false);
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
    }
  };

  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      startRecording();
    };
  }, []);

  return (
    <div className="flex items-center flex-col">
      {/* Add more options as needed */}

      <div className="flex flex-col h-1/2 " ref={myMeeting}>
      <p className=" flex  z-10 top-5 left-4 items-center justify-center absolute p-5">
          {receivedTranslateText}
        </p>
      </div>
      <label className="block text-sm font-medium text-gray-700 mt-12">
        Select your language
      </label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="mx-72 text-black block w-1/4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="ml">Malayalam</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ru">Russian</option>
        <option value="zh-CN">Chinese (Simplified)</option>
        <option value="zh-TW">Chinese (Traditional)</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="te">Telugu</option>
        <option value="mr">Marathi</option>
        <option value="ta">Tamil</option>
        <option value="gu">Gujarati</option>
        <option value="kn">Kannada</option>
        <option value="ml">Malayalam</option>
        <option value="pa">Punjabi</option>
        <option value="or">Odia</option>
      </select>
    </div>
  );
}
