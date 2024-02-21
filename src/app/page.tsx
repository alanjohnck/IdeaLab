"use client";
import Image from "next/image";
import middle from "../../public/transcend-middle.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-row-3 w-screen bg-white ">
      {/**frame 1 */}
      <div className="flex flex-col h-screen gap-3 bg-white">
        {/**NAVBAR */}
        <div className="flex flex-row w-screen h-24 fixed bg-white items-center justify-between z-20 ">
          <img
            className="flex w-45 h-36 p-6 cursor-pointer"
            src="Component 2.svg"
          ></img>
          <div className="mx-12">
            <button className="bg-[#2096BD] border-[2px]  rounded-xl py-2 px-5 font-semibold transition delay-75 hover:bg-white hover:border-[#2096BD]  hover:text-[#176B87]">
              Sign Up
            </button>
            <button className="border-[2px] border-[#2096BD] ml-5  rounded-xl py-2 px-4 font-semibold text-[#176B87] transition delay-75 hover:bg-[#2096BD] hover:text-white">
              Download
            </button>
          </div>
        </div>
        {/**NAVBAR */}

        <div className="border border-[#98C3D1] w-[250px] h-[250px] rounded-md self-start  z-10 absolute mt-4  left-32 "></div>
        <div className="flex flex-col h-screen w-screen place-content-start gap-2 ">
          <div className="flex flex-row w-screen h-5/6 items-center justify-start gap-10 p-10 ">
            <div className="flex flex-col w-[670px] h-[350px] items-center justify-center border border-[#98C3D1] rounded-md mt-14 ml-4 gap-6">
              <div className="flex flex-col items-start justify-start p-10 gap-4">
                <h1 className="flex justify-start  text-blue-300  text-3xl font-bold">
                  Breaking Language Barriers with Real-Time Translation
                </h1>

                <p className="text-black tracking-normal leading-10">
                  Conversations across languages often hit roadblocks, leading
                  to misunderstandings and hindering effective communication. At
                  TRANSCEND, we believe in making language no longer a barrier
                  in conversations. Introducing our groundbreaking solution: a
                  comprehensive real-time language translation software.
                </p>
              </div>
            </div>
            <div className="flex w-1/2 h-2/3 items-center justify-center">
              <img src="destop-removebg-preview 1.svg"></img>
            </div>
          </div>
          <div className="flex flex-grow h-1/6 justify-center items-center pb-5 ">
            <Link href="/meetingpage">
              <button className=" box-content p-4 border-4 bg-[#2096BD]    rounded-xl py-4 px-9 font-semibold  ">
                New Meeting
                <img
                  src="Video call.svg"
                  alt="Icon"
                  className="w-7 h-7 ml-2 float-right"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/**frame 1 */}

      {/**frame 2 */}
      <div className="flex flex-col mt-20">
        <div className="border border-[#98C3D1] w-[250px] h-[250px] rounded-md self-end mx-52 z-10  absolute bottom-0 right-0 mb-[-180px]"></div>
        <div className="bg-white flex justify-between mx-28 z-0 relative">
          <Image src={middle} alt="middle image" width={500} height={300} />
          <div className="border border-[#98C3D1] w-[670px] h-[220] rounded-md relative">
            <h4 className="text-[#86B6F6] m-8 text-3xl font-bold">
              Seamless Real-Time Translation
            </h4>
            <p className="text-black m-8 tracking-normal leading-10">
              Our software seamlessly translates spoken words in real-time
              during meeting video calls. Whether you're speaking Malayalam or
              English, our technology ensures that your message is conveyed
              accurately and instantly. Your English-speaking friend hears your
              Malayalam words in English, enabling effortless communication
              regardless of the languages spoken.
            </p>
          </div>
        </div>
      </div>
      {/**frame 2 */}

      {/* frame 3 */}
      <div className="h-screen bg-white">
        <div className="flex flex-col md:flex-row h-1/6 bg-white mt-10 md:pt-0">
          <div className="flex justify-center items-center h-full w-full md:w-1/2">
            <h1 className="text-xl rounded-2xl p-3 text-black font-extrabold px-4 border-4 border-solid border-[#B4D4FF]">
              Facilitating Inclusive Communication
            </h1>
          </div>
          <div className="flex justify-center items-center h-full w-full md:w-1/2">
            <h1 className="text-xl rounded-2xl p-3 text-black font-extrabold px-10 border-4 border-solid border-[#B4D4FF]">
              Innovative Technology
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center h-4/6 bg-white">
          <img
            className="h-1/2"
            src="subtitle 1.svg"
            alt="Description of the image"
          />
        </div>

        {/**footer */}
        <div className="h-1/6 bg-[#B4D4FF]"></div>
        {/**footer */}
      </div>
      {/**frame 3 */}
    </div>
  );
}