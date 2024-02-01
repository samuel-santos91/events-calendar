import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import Event from "../components/Event";
import EventsList from "./EventsList";
import ConfirmDelete from "../components/ConfirmDelete";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";
import DateHeader from "../components/DateHeader";

const DayEvents = () => {
  const {
    day,
    year,
    setOpenEventListModal,
    monthNumber,
    openConfirmDeleteModal,
    openEventModal,
    openAddEventModal,
    openEditEventModal,
    setOpenAddEventModal,
    setOpenEditEventModal,
  } = useContext(CalendarContext) as CalendarContextProps;

  const chosenDate = new Date(year, monthNumber, day);

  return (
    <section className="absolute top-0 left-0 w-full h-full">
      <div
        onClick={() => {
          setOpenEventListModal(false);
          setOpenAddEventModal(false);
          setOpenEditEventModal(false);
        }}
        className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-screen z-10"
      />
      <article className="w-3/4 sm:w-[27rem] h-[30rem] p-4 rounded-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 overflow-y-scroll">
        <DateHeader />
        <EventsList date={chosenDate} />

        <button
          onClick={() => setOpenAddEventModal(true)}
          className="p-3 w-28 fixed bottom-4 right-6 rounded-md bg-blue-700 text-white"
        >
          Add Event
        </button>
      </article>

      {openEventModal && <Event />}
      {openAddEventModal && <AddEvent />}
      {openEditEventModal && <EditEvent />}

      {openConfirmDeleteModal && <ConfirmDelete />}
    </section>
  );
};

export default DayEvents;
