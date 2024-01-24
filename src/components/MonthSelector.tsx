import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

const MonthSelector = () => {
  const { monthNumber, setMonthNumber, year, setYear, monthName } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const incrementMonth = () => {
    if (monthNumber === 11) {
      setMonthNumber(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonthNumber((prevMonth) => prevMonth + 1);
    }
  };

  const decrementMonth = () => {
    if (monthNumber === 0) {
      setMonthNumber(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonthNumber((prevMonth) => prevMonth - 1);
    }
  };

  return (
    <div>
      <p>{monthName}</p>
      <p>{year}</p>
      <button className="p-2 bg-slate-500" onClick={incrementMonth}>
        +
      </button>
      <button className="p-2 bg-slate-200" onClick={decrementMonth}>
        -
      </button>
    </div>
  );
};

export default MonthSelector;
