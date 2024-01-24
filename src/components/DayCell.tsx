import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
interface DayCellProps {
  day: number;
}

const DayCell: React.FC<DayCellProps> = ({ day }) => {
  const { monthNumber, year, setOpenModal, setDay } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const firstDayOfMonth = new Date(year, monthNumber, 1);
  const offset = firstDayOfMonth.getDay();

  const handleClick = () => {
    if (day > offset) {
      setDay(day - offset);
      setOpenModal(true);
    }
  };

  return (
    <td
      onClick={handleClick}
      className={day > offset ? "p-5 hover:bg-slate-500" : "p-5"}
    >
      {day <= offset ? "" : day - offset}
    </td>
  );
};

export default DayCell;
