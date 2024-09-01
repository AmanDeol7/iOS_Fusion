import Image from "next/image";
export default function Partners(){
    return (
      <section id="partners" className="px-32 py-16 bg-[#1A1A1A] h-[75vh] text-white">
        <h1 className="text-5xl font-bold m-4">PARTNERS</h1>
        <div className="flex justify-around m-4 my-20">
            <Image className="w-[10rem]" src="/mcd.png" alt="partner1" width={500} height={500} />
            <Image className="w-[10rem]" src="/mcd.png" alt="partner1" width={500} height={500} />
            <Image className="w-[10rem]" src="/mcd.png" alt="partner1" width={500} height={500} />
        </div>
      </section>
    );
}