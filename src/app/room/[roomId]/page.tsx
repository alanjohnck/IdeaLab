"use client";
import React, { useState, useRef, useEffect, use } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import AudioStream from "../AudioStream";
import axios from "axios";
import $ from "jquery";
import io from "socket.io-client";
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const socket = io("http://localhost:3001"); // Connect to your signaling server

export default function RoomId({ params }: any) {
  function speak(text: any) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  }

  // Use it like this:

  const [transcript, setTranscript] = useState("");
  const [translateText, setTranslateText] = useState("");
  const [receivedTranscriptText, setReceivedTranscriptText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ml");
  const [sourceLang, setSourceLang] = useState("");
  const [isRoomJoined, setIsRoomJoined] = useState(false);
  // Send translated text to the signaling server
  // ...

  useEffect(() => {
    // Emit the 'translatedText' event whenever the translated text changes
    if (transcript) {
      socket.emit("transcriptText", transcript);
      console.log("emmited");
    }
  }, [transcript]);

  useEffect(() => {
    socket.on("transcriptText", (data) => {
      setReceivedTranscriptText(data);
      console.log(`recieved : ${data} `);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off("transcriptText");
    };
  }, []);

  useEffect(() => {
    socket.on("languageSelected", (language) => {
      setSourceLang(language);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off("languageSelected");
    };
  }, []);

  useEffect(() => {
    translate();
  }, [receivedTranscriptText, selectedLanguage]);
  useEffect(() => {
    console.log(translateText);
  }, [translateText]);

  // useEffect(() => {
  //   if (!transcript && translateText) {
  //     texttospeech();
  //   }
  // }, [transcript, translateText]);

  const translate = () => {
    const targetLang = selectedLanguage;
    if (receivedTranscriptText) {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
        receivedTranscriptText
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
        title: "Name", // Set the title to your desired text
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
        setIsRoomJoined(true);
      },

      showScreenSharingButton: false,
    });
  };

  const voiceSettings = {
    stability: 0.95,
    similarity_boost: 1,
    use_speaker_boost: true
  };

  useEffect(() => {
    // Create a new SpeechRecognition instance and configure it whenever selectedLanguage changes
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = selectedLanguage;
  }, [selectedLanguage]); // Watch for changes in selectedLanguage

  // useEffect(() => {
  //   if (translateText) {
  //    // texttospeech();
  //   }
  // }, [translateText, selectedLanguage]);

  const startRecording = () => {
    // // Create a new SpeechRecognition instance and configure it
    // recognitionRef.current = new window.webkitSpeechRecognition();
    // recognitionRef.current.continuous = true;
    // recognitionRef.current.interimResults = false;
    // recognitionRef.current.lang = selectedLanguage;
    console.log(selectedLanguage);
    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(transcript);
      setTranscript(transcript);
    };

    recognitionRef.current.onend = () => {
      console.log("Speech recognition service disconnected, reconnecting...");
      recognitionRef.current.start();
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };
  const modelId = "eleven_multilingual_v2"
  const apiKey = "7cabe86334a078e51c316eb42f430486";
  const voiceId = "21m00Tcm4TlvDq8ikWAM"
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
    }
  };

  return (
    <div className="relative flex items-center flex-col h-screen bg-white">
      {/* Add more options as needed */}
      <div className="absolute z-10 top-5 left-4">
        <p className=" p-5">{translateText}</p>
        <>
          <label className="block text-sm font-medium text-gray-700 mt-12">
            Select your language
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              socket.emit("languageSelected", e.target.value);
            }}
            className="text-black py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        </>
        <AudioStream
          voiceId={voiceId}
          text={translateText}
          apiKey={apiKey}
          voiceSettings={voiceSettings}
          modelId={modelId}
        />
      </div>
      <div className="flex flex-col h-full w-full " ref={myMeeting}></div>
    </div>
  );
}
