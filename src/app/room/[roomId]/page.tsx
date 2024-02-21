"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function RoomId({ params }: any) {
  const [transcript, setTranscript] = useState("");

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
    title: "Your Text Here" // Set the title to your desired text
  },
      sharedLinks: [{
        name: 'Copy Link',
        url: `https://localhost:3000/room/${roomID}`
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      onJoinRoom() {
        // Start recording when joined room
        startRecording();
        
      },
     
      showScreenSharingButton: false
    })
    
  }

  const startRecording = () => {
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

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
    <div className=''>
      <div className='flex flex-col h-1/2 ' ref={myMeeting} />
       <p className=' flex  z-10 top-5 left-4 items-center justify-center absolute p-5'>{transcript}</p>
    </div>
  );
}
