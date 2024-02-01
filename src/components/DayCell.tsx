import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
interface DayCellProps {
  cellDay: number;
}

const DayCell: React.FC<DayCellProps> = ({ cellDay }) => {
  const {
    day,
    monthNumber,
    year,
    setOpenEventListModal,
    setDay,
    eventsPerDate,
  } = useContext(CalendarContext) as CalendarContextProps;

  const firstDayOfMonth = new Date(year, monthNumber, 1);
  const offset = firstDayOfMonth.getDay();

  const currentCellDate = new Date(year, monthNumber, cellDay - offset + 1)
    .toISOString()
    .split("T")[0];

  const handleClick = () => {
    if (cellDay > offset) {
      setDay(cellDay - offset);
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
        cellDay > offset
          ? `w-36 h-20 md:h-32 sm:h-24 border-solid border-2 border-slate-500 ${
              isEventDate ? "bg-red-200 hover:bg-red-300" : "hover:bg-slate-200"
            }`
          : ""
      }
    >
      <div className="relative">
        <span
          className={
            day !== cellDay - offset
              ? "absolute top-[-2.3rem] md:top-[-4rem] sm:top-[-3rem] right-[.2rem]"
              : "absolute top-[-2.3rem] md:top-[-3.8rem] sm:top-[-2.8rem] right-[.2rem] bg-red-600 text-white px-[.5rem] py-[.1rem] rounded-full"
          }
        >
          {cellDay <= offset ? "" : cellDay - offset}
        </span>
      </div>
    </td>
  );
};

export default DayCell;
