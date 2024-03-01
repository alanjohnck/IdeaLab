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
 <div className="bg-white flex flex-col h-screen w-screen items-center justify-center gap-5">
     <div className="flex">
           jgtr
     </div>
     <h1 className="text-black font-regular p-5 rounded-lg bg-slate-100">Create your own Room Id [eg:1234] and share it with your friend and join the room</h1>
     <input 
     className="text-black p-4 border border-blue-200 rounded-lg"
     type="text"
      value={value} 
      onChange={(e)=>setValue(e.target.value)} placeholder="enter the room code">
     </input>
     <button className="bg-[#2096BD] w-[250px] h-[40px] rounded-lg " onClick={handleJoinRoom}>join</button>
 </div>
 );
}
