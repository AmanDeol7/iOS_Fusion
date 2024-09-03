"use client";
import { useState, useRef, useEffect } from "react";
import Event from "@/components/Event";
import Slider from "@mui/material/Slider";

export default function Timeline() {
  const [range, setRange] = useState<number>(0);

  const getBackgroundColor = (index: number): string => {
    if (range < 33.33 && index === 3) return "bg-[#5C4AC8]";
    if (range >= 33.33 && range < 66.66 && index === 2) return "bg-[#5C4AC8]";
    if (range >= 66.66 && range <= 99.99 && index === 1) return "bg-[#5C4AC8]";
    if (range == 100 && index === 0) return "bg-[#5C4AC8]";
    return "bg-[#1A1A1A]";
  };

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    setRange(Array.isArray(newValue) ? newValue[0] : newValue);
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
  // const sliderRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   const slider = sliderRef.current;

  //   if (slider) {
  //     const handleInput = () => {
  //       slider.style.transition = "all 0.5s ease";
  //     };

  //     slider.addEventListener("input", handleInput);

  //     return () => {
  //       slider.removeEventListener("input", handleInput);
  //     };
  //   }
  // }, []);
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

        <div className="h-full flex justify-center  mt-[5rem] rotate-0">
          <Slider
              value={range}
              onChange={handleRangeChange}
              aria-labelledby="range-slider"
              min={0}
              max={100}
              track="inverted"
              orientation="vertical"
              
              sx={{
                width: 10, 
                height: '65%', 
                color: '#5f37b0',

              }}
            />
        </div>

        <div className="w-[60%] gap-8 justify-center items-center flex flex-col p-12">
          <div className="flex flex-col gap-4 mb-5">
            <Event
              key={0}
              onClick={() => handleClick(0)}
              className={`flex flex-col ${getBackgroundColor(0)}`}

            />
            <Event
              key={1}
              onClick={() => handleClick(1)}
              className={`flex flex-col ${getBackgroundColor(1)}`}
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <Event
              key={2}
              onClick={() => handleClick(2)}
              className={`flex flex-col ${getBackgroundColor(2)}`}
            />
            <Event
              key={3}
              onClick={() => handleClick(3)}
              className={`flex flex-col ${getBackgroundColor(3)}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
