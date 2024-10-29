// src/components/ui/GuestSelector.tsx

import React, { useState } from "react";

const GuestSelector: React.FC = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {[
        { label: "Adults", subtext: "Ages 13 or above", count: adults, setCount: setAdults },
        { label: "Children", subtext: "Ages 2–12", count: children, setCount: setChildren },
        { label: "Infants", subtext: "Ages 0–2", count: infants, setCount: setInfants },
      ].map(({ label, subtext, count, setCount }) => (
        <div key={label} className="flex items-center justify-between mb-4">
          <div>
            <p className="font-semibold text-[.8rem]">{label}</p>
            <p className="text-[.5rem] text-gray-500">{subtext}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => decrement(setCount)}
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              -
            </button>
            <span className="mx-4">{count}</span>
            <button
              onClick={() => increment(setCount)}
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestSelector;