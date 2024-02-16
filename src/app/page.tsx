import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-row-3 w-screen">
 {/**frame 1 */}
   <div className="flex flex-col h-screen gap-3 bg-white">
   {/**NAVBAR */}
    <div className="flex flex-row w-screen h-24 bg-blue-100 items-center justify-start">
      <img className="flex w-43 h-32 p-6" src="Component 2.svg"></img>    
    </div>
    {/**NAVBAR */}
   
    <div className="flex flex-row w-screen h-full items-center justify-start gap-2 p-6 ">
      <div className="flex flex-col w-1/2 h-2/3 items-center justify-center border border-blue-100 rounded-md">
        <div className="flex flex-col items-start justify-start p-5">
           <h1 className="flex justify-start  text-blue-300  text-2xl font-extrabold">Breaking Language Barriers with Real-Time Translation</h1>
           <br></br>
           <p className="text-black text-lg font-regular">Conversations across languages often hit roadblocks, leading to misunderstandings and hindering effective communication. At TRANSCEND, we believe in making language no longer a barrier in conversations. Introducing our groundbreaking solution: a comprehensive real-time language translation software.</p>
        </div>
      </div>
      <div className="flex w-1/2 h-2/3 items-center justify-center">
          <img src="destop-removebg-preview 1.svg"></img>
      </div>
    </div>
    
   </div>
  {/**frame 1 */}





   {/**frame 2 */}
   <div className="h-screen bg-white">
    <h1 className="text-black">middle</h1>

   </div>
   {/**frame 2 */}




   <div className="h-screen bg-white">
    <h1 className="text-black">Footer</h1>
   </div>

  </div>
  );
}
