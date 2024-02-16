import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-row-3 w-screen">
   <div className="flex flex-col h-screen bg-white">
   {/**NAVBAR */}
    <div className="flex flex-row w-screen h-24 bg-blue-100 items-center justify-start">
      <img className="flex w-43 h-32 p-6" src="Component 2.svg"></img>    
    </div>
    {/**NAVBAR */}
    <div className=" ">

    </div>
    <div>

    </div>
   </div>
   <div className="h-screen bg-white">
    <h1>middle</h1>

   </div>
   <div className="h-screen bg-white">
    <h1>Footer</h1>
   </div>
  </div>
  );
}
