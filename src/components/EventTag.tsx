import { useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

interface EventTitleProp {
  eventId: number | null;
  eventTitle: string;
}

const EventTag: React.FC<EventTitleProp> = ({ eventId, eventTitle }) => {
  const { setEventId, setOpenConfirmDeleteModal } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const deleteEventHandler = () => {
    setEventId(eventId);
    setOpenConfirmDeleteModal(true);
  };

  return (
    <div className="flex justify-between items-center bg-blue-400 my-4 p-1 rounded-md">
      <h2>{eventTitle}</h2>
      <section>
        <div className="flex">
          <button className="m-2 px-2 rounded-xl bg-green-500">E</button>
          <button
            onClick={deleteEventHandler}
            className="m-2 px-2 rounded-xl bg-red-500"
          >
            D
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventTag;
