import { useContext, useEffect, CSSProperties } from "react";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
import { getEventById } from "../services/event-service";

const Event = () => {
  const { eventId, event, setEvent, eventHoverRef } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  useEffect(() => {
    if (eventId) {
      const getEvent = async () => {
        await getEventById(eventId)
          .then((res) => setEvent(res))
          .catch((e) => console.log(e));
      };

      getEvent();
    }
  }, []);

  const topPosition = eventHoverRef?.current?.offsetTop ?? 0;
  const leftPosition = eventHoverRef?.current?.offsetLeft ?? 0;

  const inlineStyles: CSSProperties = {
    position: "absolute",
    top: `${topPosition + 50}px`,
    left: `${leftPosition + 80}px`,
    zIndex: 50,
  };

  return (
    <article style={inlineStyles} className="p-6 rounded-md bg-yellow-100">
      <p>{event?.description}</p>
      <p className="italic">at {event?.time}</p>
    </article>
  );
};

export default Event;
