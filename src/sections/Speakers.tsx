import Image from "next/image";
export default function Speakers() {
  return (
    <section id="speakers" className="h-[100vh] bg-[#1A1A1A] text-white px-32 py-20">
      <h1 className="text-5xl font-bold m-4">SPEAKERS</h1>
      <div className="flex justify-between my-8 gap-16">
        <div className="flex gap-8 items-center">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            pariatur, quod nobis nihil nulla minus alias voluptatem molestiae,
            odit at excepturi quidem ducimus, impedit veritatis!
          </p>
          <Image
            className="h-[25rem] mt-[5rem]"
            src="/iphone-black.png"
            alt="speaker1"
            width={500}
            height={500}
          />
        </div>
        <div className="flex gap-8 items-center">
          <Image
            className="h-[25rem]"
            src="/iphone-black.png"
            alt="speaker2"
            width={500}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam culpa saepe. Accusamus tempore necessitatibus tenetur
            quod corporis dicta sequi ipsa unde? Aliquam, accusantium facilis!
          </p>
        </div>
      </div>
    </section>
  );
}
