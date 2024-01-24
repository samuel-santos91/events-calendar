import { useEffect, useState } from "react";

import { getEventsByDate, EventData } from "../services/event-service";

interface ChosenDateProp {
  date: Date;
}

const EventsList: React.FC<ChosenDateProp> = ({ date }) => {
  const [eventsData, setEventsData] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getEventsByDate(date)
        .then((res) => {
          setEventsData(res);
          console.log(res)
        })
        .catch((e) => console.log(e));
    };

    fetchData();
  }, []);

  return (
    <section>
      {eventsData.map((event) => (
        <p key={event.id}>{event.title}</p>
      ))}
    </section>
  );
};

export default EventsList;
