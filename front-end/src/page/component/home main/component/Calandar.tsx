// src/components/ui/Calendars.tsx

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const Calendars: React.FC = () => {
  const [selectedRange, setSelectedRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

  const handleSelect = (range: { from: Date; to: Date }) => {
    setSelectedRange(range);
  };
  return (
    <div>
      <Calendar
        mode="range"
        selected={selectedRange}
        onSelect={handleSelect}
        numberOfMonths={2}
        className="rounded-md border bg-white"
        classNames={{
          day_selected: "bg-blue-500 text-white",
          day_range_middle: "bg-blue-200",
        }}
        components={{
          IconLeft: () => <span className="text-lg">{"<"}</span>,
          IconRight: () => <span className="text-lg">{">"}</span>,
        }}
      />
    </div>
  );
};
export default Calendars