import { useContext } from "react";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

const DateHeader = () => {
  const { day, monthName, year } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  return <h2 className="italic">{`${day} ${monthName} ${year}`}</h2>;
};

export default DateHeader;
