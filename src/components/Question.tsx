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
        className="h-[3rem] items-center justify-between flex p-4 md-2 cursor-pointer"
      >
        <p>Will OD's be given for the event?</p>
        <p className="text-2xl">
          {isOpen ? (
            <MdKeyboardArrowDown className="transition-all duration-600 ease-in-out" />
          ) : (
            <MdKeyboardArrowRight className="transition-all duration-600 ease-in-out" />
          )}
        </p>
      </div>
      <div
        className={`overflow-hidden transition-all duration-600 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <hr className="mx-4 text-center" />
        <p className="mx-4 my-2">Yes</p>
      </div>
    </div>
  );
}
