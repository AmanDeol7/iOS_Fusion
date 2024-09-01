import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Question from "@/components/Question";
export default function FAQ() {
  return (
    <section id="faq" className=" bg-black text-white px-32 py-20">
      <h1 className="text-5xl font-bold m-4">FAQ</h1>
      <div className="flex flex-col gap-8 m-4">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </section>
  );
}
