import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"

const Calandar: React.FC = () => {

const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border bg-white right-1 "
  />
  )
};

export default Calandar;