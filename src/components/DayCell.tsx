import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
interface DayCellProps {
  day: number;
}

const DayCell: React.FC<DayCellProps> = ({ day }) => {
  const { monthNumber, year, setOpenEventListModal, setDay, eventsPerDate } =
    useContext(CalendarContext) as CalendarContextProps;

  const firstDayOfMonth = new Date(year, monthNumber, 1);
  const offset = firstDayOfMonth.getDay();

  const currentCellDate = new Date(year, monthNumber, day - offset + 1)
    .toISOString()
    .split("T")[0];

  const handleClick = () => {
    if (day > offset) {
      setDay(day - offset);
      setOpenEventListModal(true);
    }
  };

  const isEventDate = eventsPerDate?.some(
    (eventDate) =>
      new Date(eventDate).toISOString().split("T")[0] === currentCellDate
  );

  return (
    <td
      onClick={handleClick}
      className={
        day > offset
          ? `w-36 h-32 border-solid border-2 border-slate-500 ${
              isEventDate ? "bg-red-200 hover:bg-red-300" : "hover:bg-slate-200"
            }`
          : ""
      }
    >
      <div className="relative">
        <span className="absolute top-[-3.7rem] right-[.2rem]">{day <= offset ? "" : day - offset}</span>
      </div>
    </td>
  );
};

export default DayCell;
