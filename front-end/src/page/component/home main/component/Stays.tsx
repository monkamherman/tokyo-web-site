import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";
import Calendar from "./Calandar";

function Stays() {
  const [dateRange, setDateRange] = useState("Oct 01 - Oct 18");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newRange: React.SetStateAction<string>) => {
    setDateRange(newRange);
    setShowCalendar(false); // Hide calendar after selecting dates
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <CiLocationOn className="h-8 w-8" />
        <div className="flex flex-col">
          <p className="text-[1.3rem] font-semibold">Location</p>
          <span className="text-[1rem] text-gray-500">Where are you going?</span>
        </div>
      </div>
      <div className="flex gap-6">
        <div
          className="flex gap-4 items-center border-l-gray-500 ml-4 cursor-pointer"
          onClick={toggleCalendar}
        >
          <AiOutlineCalendar className="h-8 w-8" />
          <div className="flex flex-col">
            <p className="text-[1.3rem] font-semibold">{dateRange}</p>
            <span className="text-[1rem] text-gray-500">Check in - Check out</span>
          </div>
        </div>
        <div className="flex gap-4 items-center border-l-gray-500 ml-4">
          <AiOutlineCalendar className="h-8 w-8" />
          <div className="flex flex-col">
            <p className="text-[1.3rem] font-semibold">4 Guests</p>
            <span className="text-[1rem] text-gray-500">Guests</span>
          </div>
        </div>
        <div className="p-8 bg-blue-600 rounded-[50%] hover:bg-blue-500">
          <AiOutlineSearch className="h-6 w-6" />
        </div>
      </div>
      {showCalendar && (
        <div className="absolute top-full mt-2 left-0 z-10">
          <Calendar onDateChange={handleDateChange} />
        </div>)}
    </div>
  );
}

export default Stays;