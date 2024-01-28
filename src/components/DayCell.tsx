import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
interface DayCellProps {
  day: number;
}

const DayCell: React.FC<DayCellProps> = ({ day }) => {
  const { monthNumber, year, setOpenEventListModal, setDay, eventsPerDate } = useContext(
    CalendarContext
  ) as CalendarContextProps;

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
          ? `p-5 ${
              isEventDate ? "bg-red-200 hover:bg-red-500" : "hover:bg-slate-500"
            }`
          : "p-5"
      }
    >
      {day <= offset ? "" : day - offset}
    </td>
  );
};

export default DayCell;
