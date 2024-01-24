import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

const Modal = () => {
  const { day, year, setOpenModal, monthName } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  return (
    <section className="absolute top-0 left-0 w-full h-full">
      <div
        onClick={() => setOpenModal(false)}
        className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full z-10"
      />
      <div className="w-80 h-96 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {`${day} ${monthName} ${year}`}
      </div>
    </section>
  );
};

export default Modal;
