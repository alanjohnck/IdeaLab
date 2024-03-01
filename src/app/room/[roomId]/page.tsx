
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

"use client"
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { start } from 'repl';

export default function RoomId({params}:any){


 const myMeeting = async(element:any)=>{

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
      },

      showScreenSharingButton: false,
    });
  };

  const startRecording = () => {
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "ml-IN";
    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
    };

   
   
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
      },

      showScreenSharingButton: false,
    });
  };

  const startRecording = () => {
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "ml-IN";
    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      console.log(event.results);
      setTranscript(transcript);
    };

   
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
         appID, 
         serverSecret,
         roomID,    
         Date.now().toString(),
         "alan john"
         );
     const zc = ZegoUIKitPrebuilt.create(kitToken);
     zc.joinRoom({
        container:element,
        sharedLinks:[{

            name:'Copy Link',
            url:`https://localhost:3000/room/${roomID}`

        }],
        scenario:{
            
            mode:ZegoUIKitPrebuilt.OneONoneCall,   
              
        },
      
        showScreenSharingButton:false
     })
     
 }
 

  return (
  return (
    <div className="relative flex items-center flex-col h-screen bg-white">
      {/* Add more options as needed */}
      <div className="absolute z-10 top-5 left-4">
        <p className=" p-5">{translateText}</p>
        <label className="block text-sm font-medium text-gray-700 mt-12">
          Select your language
        </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
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
      </div>
      <div className="flex flex-col h-full w-full " ref={myMeeting}></div>
 return (
    <div className="relative flex items-center flex-col h-screen bg-white">
      {/* Add more options as needed */}
      <div className="absolute z-10 top-5 left-4">
        <p className=" p-5">{translateText}</p>
        <label className="block text-sm font-medium text-gray-700 mt-12">
          Select your language
        </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
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
      </div>
      <div className="flex flex-col h-full w-full " ref={myMeeting}></div>

    <div className='flex bg-white item-center justify-center'>

        <div className='flex h-screen w-screen ' ref={myMeeting} />
    
    </div>
);
}