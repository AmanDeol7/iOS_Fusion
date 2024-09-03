import Navbar from "@/components/Navbar";
import Image from "next/image";
import CountdownTimer from "@/components/Countdown";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[70%] justify-center bg-gradient-to-r from-indigo-950 to-black h-[100vh]">
          <Navbar />
        <div className="m-32 text-white">
          <p className="text-6xl font-bold my-4 text-[#5F2EEA]">iOS</p>
          <p className="text-6xl font-bold my-4">FUSION 7.0 </p>
          <p className="text-md text-gray-400 mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi error
            vel optio vitae alias corporis quas libero nobis fugiat animi,
            provident quasi veniam quod. Laudantium!
          </p>
          <div className="flex my-8 mx-0 z-10">
            <button className="w-[12rem] h-[2.5rem] shadow-md bg-[#5F2EEA] border-0 rounded-full mr-4 z-10">
              EXPLORE
            </button>
            <button className="w-[12rem] h-[2.5rem] shadow-md border rounded-full mr-4 z-10">
              ADD TO CALENDAR
            </button>
          </div>
          <div className="absolute left-0 bottom-0 m-0 p-0  h-[16.5rem]">
            <Image
              className="object-cover w-full h-full"
              src="/ADG.png"
              alt="ADG"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <CountdownTimer targetDate="2024-09-27T08:00:00" />
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[100vh] flex justify-center items-center bg-[#5F2EEA]">
        <Image
          className="w-[60%] "
          src="/image.png"
          alt="iphone"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
