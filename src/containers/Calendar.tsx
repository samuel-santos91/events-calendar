import { useContext, useEffect } from "react";

import { generateCalendar } from "../services/utils";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import MonthSelector from "../components/MonthSelector";
import WeekDays from "../components/WeekDays";
import DayCell from "../components/DayCell";
import DayEvents from "./DayEvents";
import { EventData, getByMonthAndYear } from "../services/event-service";

const Calendar = () => {
  const {
    monthNumber,
    year,
    openEventListModal,
    setEventsPerDate,
    openConfirmDeleteModal,
    openAddEventModal,
    openEditEventModal,
  } = useContext(CalendarContext) as CalendarContextProps;

  //Gets all events on that month AND updates when an event is deleted
  useEffect(() => {
    const filterEvents = async () => {
      await getByMonthAndYear(year, monthNumber)
        .then((res) => {
          const events = res.data.map((event: EventData) => event.date);
          setEventsPerDate(events);
        })
        .catch((e) => {
          if (e.response && e.response.status === 404) {
            setEventsPerDate(null);
          } else {
            console.error(e);
          }
        });
    };

    filterEvents();
  }, [
    monthNumber,
    openConfirmDeleteModal,
    openAddEventModal,
    openEditEventModal,
  ]);

  return (
    <div className="relative flex flex-col items-center h-screen">
      <MonthSelector />
      <table className="mt-3">
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          {generateCalendar(year, monthNumber).map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <DayCell key={dayIndex} cellDay={day} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {openEventListModal && <DayEvents />}
    </div>
  );
};

export default Calendar;
