"use client";
import * as React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

/**
 * Calendar component that displays a monthly calendar view
 */
const Calendar: React.FC = () => {
  return (
    <section className="flex justify-center items-center p-8 bg-white rounded-3xl h-[390px] w-[390px] max-md:p-5 max-md:w-full max-md:h-auto max-md:max-w-[390px] max-sm:p-4 max-sm:rounded-2xl">
      <div className="h-[328px] w-[328px] max-md:w-full max-md:h-auto">
        <CalendarHeader month="January" year={2025} />
        <CalendarGrid month={1} year={2025} />
      </div>
    </section>
  );
};

export default Calendar;
