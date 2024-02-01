import { useContext } from "react";
import { deleteEvent } from "../services/event-service";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

const ConfirmDelete = () => {
  const { eventId, setOpenConfirmDeleteModal } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const deleteEventHandler = async () => {
    if (eventId) {
      try {
        await deleteEvent(eventId);
        setOpenConfirmDeleteModal(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-screen z-30" />
      <article className="w-72 h-36 p-4 rounded-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <h1>Are you sure you want to delete this event?</h1>
        <div className="mt-2">
          <button  onClick={deleteEventHandler} className="m-2 p-3 w-28 rounded-md bg-blue-700 text-white">
            Confirm
          </button>
          <button
            onClick={() => setOpenConfirmDeleteModal(false)}
            className="m-2 p-3 w-28 rounded-md bg-slate-300 text-black"
          >
            Cancel
          </button>
        </div>
      </article>
    </section>
  );
};

export default ConfirmDelete;
