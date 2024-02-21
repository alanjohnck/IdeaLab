"use client"

import axios from "axios";

import React,{useState,useCallback} from "react"

import { useRouter } from "next/navigation";



export default function MeetingPage(){


const router = useRouter();
const [value,setValue]=useState("");
const handleJoinRoom =useCallback(()=>{
 router.push(`/room/${value}`);
},[router,value])

 return (
 <div className="flex flex-col h-screen w-screen items-center justify-center gap-5">
     
     <h1>Join room</h1>
     <input 
     className="text-black "
     type="text"
      value={value} 
      onChange={(e)=>setValue(e.target.value)} placeholder="enter the room code">

     </input>
     <button className="bg-[#2096BD] w-[100px] h-[40px] rounded-lg " onClick={handleJoinRoom}>join</button>
 </div>
 );
}
