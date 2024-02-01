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
    <section className="mb-8 flex flex-col items-center">
      <div className="flex items-center">
        <p className="mx-2 font-bold text-2xl">{monthName}</p>
        <p className="text-2xl">{year}</p>
      </div>

      <div>
        <button className="mx-3 text-2xl" onClick={decrementMonth}>
          &#8678;
        </button>
        <button className="text-2xl" onClick={incrementMonth}>
          &#8680;
        </button>
      </div>
    </section>
  );
};

export default MonthSelector;
