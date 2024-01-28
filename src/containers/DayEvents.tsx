import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import EventsList from "./EventsList";
import ConfirmDelete from "../components/ConfirmDelete";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";

const DayEvents = () => {
  const {
    day,
    year,
    setOpenEventListModal,
    monthName,
    monthNumber,
    openConfirmDeleteModal,
    openAddEventModal,
    openEditEventModal,
    setOpenAddEventModal,
  } = useContext(CalendarContext) as CalendarContextProps;

  const chosenDate = new Date(year, monthNumber, day);

  return (
    <section className="absolute top-0 left-0 w-full h-full">
      <div
        onClick={() => setOpenEventListModal(false)}
        className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full z-10"
      />
      <article className="w-80 h-96 p-4 rounded-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-y-scroll">
        {`${day} ${monthName} ${year}`}
        <EventsList date={chosenDate} />

        <button
          onClick={() => setOpenAddEventModal(true)}
          className="absolute bottom-0 m-2 p-2 bg-blue-400 right-0"
        >
          Add Event
        </button>
      </article>

      {openAddEventModal && <AddEvent />}
      {openEditEventModal && <EditEvent />}

      {openConfirmDeleteModal && <ConfirmDelete />}
    </section>
  );
};

export default DayEvents;
