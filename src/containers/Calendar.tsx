import { useState } from "react";

import { generateCalendar } from "../services/utils";
import MonthSelector from "../components/MonthSelector";
import WeekDays from "../components/WeekDays";
import DayCell from "../components/DayCell";
import Modal from "../components/Modal";

const Calendar = () => {
  const currentDate = new Date();

  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <MonthSelector
        onMonthChange={(newMonth) => setSelectedMonth(newMonth)}
        onYearChange={(newYear) => setSelectedYear(newYear)}
      />
      <table className="mt-3">
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          {generateCalendar(selectedYear, selectedMonth).map(
            (week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <DayCell
                    key={dayIndex}
                    day={day}
                    month={selectedMonth}
                    year={selectedYear}
                    onClick={() => setOpenModal(true)}
                  />
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
      {openModal && <Modal backDropClick={setOpenModal}/>}
    </div>
  );
};

export default Calendar;
