import { useState } from "react";

const MonthSelector = () => {
  const currentDate = new Date();

  const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

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

  const month = new Date(year, monthNumber);

  const monthName = month.toLocaleString("default", { month: "long" });

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
