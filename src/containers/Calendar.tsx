import { useContext } from "react";

import { generateCalendar } from "../services/utils";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import MonthSelector from "../components/MonthSelector";
import WeekDays from "../components/WeekDays";
import DayCell from "../components/DayCell";
import Modal from "../components/Modal";

const Calendar = () => {
  const { monthNumber, year, openModal } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  return (
    <div className="flex flex-col items-center">
      <MonthSelector />
      <table className="mt-3">
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          {generateCalendar(year, monthNumber).map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <DayCell key={dayIndex} day={day} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <Modal />}
    </div>
  );
};

export default Calendar;
