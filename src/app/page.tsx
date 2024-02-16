import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-row-3 w-screen">
 {/**frame 1 */}
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
