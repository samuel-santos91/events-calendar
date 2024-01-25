import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

import EventsList from "../containers/EventsList";
import ConfirmDelete from "./ConfirmDelete";

const DayEvents = () => {
  const {
    day,
    year,
    setOpenModal,
    monthName,
    monthNumber,
    openConfirmDeleteModal,
  } = useContext(CalendarContext) as CalendarContextProps;

  const chosenDate = new Date(year, monthNumber, day);

  return (
    <section className="absolute top-0 left-0 w-full h-full">
      <div
        onClick={() => setOpenModal(false)}
        className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full z-10"
      />
      <article className="w-80 h-96 p-4 rounded-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {`${day} ${monthName} ${year}`}
        <EventsList date={chosenDate} />
      </article>
      {openConfirmDeleteModal && <ConfirmDelete />}
    </section>
  );
};

export default DayEvents;
