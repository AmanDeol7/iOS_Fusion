"use client";
import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export default function Question() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen((prev) => !prev);
    };
  return (
    <div className="border rounded-lg w-[80%]">
      <div
        onClick={toggle}
        className="h-[3rem] items-center justify-between flex p-4 md-2"
      >
        <p>Will OD's be given for the event?</p>
        <p className="text-2xl">
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </p>
      </div>
      {isOpen && (
        <div id="ans" className="">
          <hr className="mx-4 text-center"/>
            <p className="mx-4 my-2 ">Yes</p>
        </div>
      )}
    </div>
  );
}
