import { useContext, useRef } from "react";
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

interface EventTitleProp {
  eventId: number | null;
  eventTitle: string;
}

const EventTag: React.FC<EventTitleProp> = ({ eventId, eventTitle }) => {
  const hoverRef = useRef(null);

  const {
    setEventId,
    setOpenConfirmDeleteModal,
    setOpenEditEventModal,
    setOpenEventModal,
    setEventHoverRef,
  } = useContext(CalendarContext) as CalendarContextProps;

  const deleteEventHandler = () => {
    setEventId(eventId);
    setOpenConfirmDeleteModal(true);
  };

  const editEventHandler = () => {
    setEventId(eventId);
    setOpenEditEventModal(true);
  };

  const handleMouseEnter = () => {
    setEventId(eventId);
    setOpenEventModal(true);
    setEventHoverRef(hoverRef);
  };

  return (
    <div
      ref={hoverRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setOpenEventModal(false)}
      className="relative flex justify-between items-center bg-blue-200 my-4 p-2 rounded-md"
    >
      <h2>{eventTitle}</h2>
      <section>
        <div className="flex">
          <button onClick={editEventHandler}>
            <GrEdit />
          </button>
          <button className="mx-4" onClick={deleteEventHandler}>
            <GoTrash />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventTag;
