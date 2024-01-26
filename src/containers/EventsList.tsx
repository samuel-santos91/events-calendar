import { useEffect, useContext } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
import { getEventsByDate } from "../services/event-service";
import EventTag from "../components/EventTag";

interface ChosenDateProp {
  date: Date;
}

const EventsList: React.FC<ChosenDateProp> = ({ date }) => {
  const { eventsData, setEventsData, eventsPerDate } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  useEffect(() => {
    const fetchEvents = async () => {
      await getEventsByDate(date)
        .then((res) => {
          setEventsData(res);
          console.log(res);
        })
        .catch((e) => {
          setEventsData([]);
          console.log(e);
        });
    };

    fetchEvents();
  }, [eventsPerDate]);

  return (
    <section>
      {eventsData?.length === 0 ? (
        <h2 className="my-4">NO EVENTS</h2>
      ) : (
        eventsData?.map((event) => (
          <EventTag
            key={event.id}
            eventId={event.id}
            eventTitle={event.title}
          />
        ))
      )}
    </section>
  );
};

export default EventsList;
