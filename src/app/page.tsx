import Image from "next/image";
import middle from "../../public/transcend-middle.png";
export default function Home() {
  return (
  <div className="grid grid-row-3 w-screen bg-white">
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
   <div className="flex flex-col mt-20">
   <div className="border border-[#98C3D1] w-[250px] h-[250px] rounded-md self-end mx-52 z-10  absolute bottom-0 right-0 mb-[-180px]"></div>
   <div className="bg-white flex justify-between mx-28 z-0 relative">
    <Image src={middle} alt="middle image" width={500} height={300}/>
    <div className="border border-[#98C3D1] w-[670px] h-[220] rounded-md relative">
      <h4 className="text-[#86B6F6] m-8 text-3xl font-bold">Seamless Real-Time Translation</h4>
      <p className="text-black m-8 tracking-normal leading-10">Our software seamlessly translates spoken words in real-time during meeting video calls. Whether you're speaking Malayalam or English, our technology ensures that your message is conveyed accurately and instantly. Your English-speaking friend hears your Malayalam words in English, enabling effortless communication regardless of the languages spoken.</p>
    </div>
   </div>
   </div>
   {/**frame 2 */}




   <div className="h-screen bg-white">
    <h1 className="text-black">Footer</h1>
   </div>

  </div>
  );
}
