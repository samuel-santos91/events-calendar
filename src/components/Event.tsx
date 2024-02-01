import { useContext } from "react";
import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";

const Event = () => {
  const { eventId } = useContext(CalendarContext) as CalendarContextProps;

  console.log(eventId);

  return <div>Event</div>;
};

export default Event;
