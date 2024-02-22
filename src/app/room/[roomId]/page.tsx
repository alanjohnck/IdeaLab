"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function RoomId({ params }: any) {
  const [transcript, setTranscript] = useState("");
  const [translated, setTranslated] = useState("");
  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Start recording when the component mounts
    startRecording();

    // Clean up function to stop recording when the component unmounts
    return () => {
      stopRecording();
    };
  }, []);

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
      showPreJoinView: true,
      preJoinViewConfig: {
        title: "Your Text Here"
      },
      sharedLinks: [{
        name: 'Copy Link',
        url: `https://localhost:3000/room/${roomID}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      onJoinRoom() {
        // Do something when joining room
      },
      showScreenSharingButton: false
    });
  }

  const startRecording = () => {
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Update the transcript state
      setTranscript(transcript);
      
      // Translate the transcript
      handleTranslate(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition
      recognitionRef.current.stop();
    }
  };

  const handleTranslate = async (text: string) => {
    try {
      const response = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`);
      const translatedText = response.data.responseData.translatedText;
      setTranslated(translatedText);
    } catch (error) {
      console.error("Error in translation:", error);
    }
  }

  
  return (
    <div className=''>
      <div className='flex flex-col h-full' ref={myMeeting} />
      <p className='flex z-10 top-5 left-4 items-center justify-center absolute p-5'>{transcript}</p>
      <p className='flex z-10 top-10 left-4 items-center justify-center absolute p-5'>{translated}</p>
    </div>
  );
}
