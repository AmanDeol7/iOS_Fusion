"use client";
import { useState, useRef, useEffect } from "react";
import Event from "@/components/Event";

export default function Timeline() {
  const [range, setRange] = useState<number>(0);

  const getBackgroundColor = (index: number): string => {
    if (range < 33.33 && index === 0) return "bg-[#5F2EEA]";
    if (range >= 33.33 && range < 66.66 && index === 1) return "bg-[#5F2EEA]";
    if (range >= 66.66 && range <= 99.99 && index === 2) return "bg-[#5F2EEA]";
    if (range == 100 && index === 3) return "bg-[#5F2EEA]";
    return "bg-[#1A1A1A]";
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(parseInt(e.target.value, 10));
  };

  const handleClick = (index: number) => {
    switch (index) {
      case 0:
        setRange(0);
        break;
      case 1:
        setRange(33.33);
        break;
      case 2:
        setRange(66.66);
        break;
      case 3:
        setRange(100);
        break;
      default:
        break;
    }
  };
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const handleInput = () => {
        slider.style.transition = "all 0.5s ease";
      };

      slider.addEventListener("input", handleInput);

      return () => {
        slider.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <section
      id="timeline"
      className="px-32 py-16 bg-black h-[100vh] text-white"
    >
      <h1 className="text-5xl font-bold m-4">TIMELINE</h1>
      <div className="flex justify-center mx-auto w-[80%] h-full">
        <div className="flex flex-col w-[30%] text-5xl justify-around items-center font-bold">
          <div>
            <h1>DAY 1</h1>
          </div>
          <div>
            <h1>DAY 2</h1>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <input
            type="range"
            ref={sliderRef}
            min="0"
            max="100"
            value={range}
            onChange={handleRangeChange}
            className="w-[20rem] transform rotate-90 bg-white transition-all duration-500 ease-out"
          />
        </div>

        <div className="w-[60%] gap-8 justify-center items-center flex flex-col p-12">
          {[0, 1, 2, 3].map((index) => (
            <Event
              key={index}
              onClick={() => handleClick(index)}
              className={`flex flex-col gap-2 ${getBackgroundColor(index)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
