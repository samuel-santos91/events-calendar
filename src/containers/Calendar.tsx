import { useContext, useEffect } from "react";

import { generateCalendar } from "../services/utils";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import MonthSelector from "../components/MonthSelector";
import WeekDays from "../components/WeekDays";
import DayCell from "../components/DayCell";
import DayEvents from "../components/DayEvents";
import { EventData, getByMonthAndYear } from "../services/event-service";

const Calendar = () => {
  const { monthNumber, year, openModal, setEventsPerDate } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  //Gets all events on that month
  useEffect(() => {
    const filterEvents = async () => {
      await getByMonthAndYear(year, monthNumber + 1)
        .then((res) => {
          const events = res.data.map((event: EventData) => event.date);
          setEventsPerDate(events);
        })
        .catch((e) => console.log(e));
    };

    filterEvents();
  }, [monthNumber]);

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
      {openModal && <DayEvents />}
    </div>
  );
};

export default Calendar;
