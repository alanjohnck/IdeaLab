"use client"
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function RoomId({params}:any){


 const myMeeting = async(element:any)=>{

    const roomID = params.roomId;
    const appID = 413796643;
    const serverSecret = "df25568f423464aa9ae77b4e88f0de02";
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

    <div>

        <div ref={myMeeting} />
    
    </div>
);
}