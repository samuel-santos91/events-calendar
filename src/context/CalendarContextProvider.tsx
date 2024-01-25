import React, { createContext, ReactNode, useState } from "react";

import { EventData } from "../services/event-service";

export interface CalendarContextProps {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  monthNumber: number;
  setMonthNumber: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openConfirmDeleteModal: boolean;
  setOpenConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  monthName: string;
  eventsData: EventData[];
  setEventsData: React.Dispatch<React.SetStateAction<EventData[]>>;
  eventId: number | null;
  setEventId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const CalendarContext = createContext<CalendarContextProps | null>(null);

interface CalendarContextProviderProps {
  children: ReactNode;
}

const CalendarContextProvider: React.FC<CalendarContextProviderProps> = ({
  children,
}) => {
  const currentDate = new Date();

  const [day, setDay] = useState(currentDate.getDate());
  const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [openModal, setOpenModal] = useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
  const [eventsData, setEventsData] = useState<EventData[]>([]);
  const [eventId, setEventId] = useState<number | null>(null);

  const month = new Date(year, monthNumber);
  const monthName = month.toLocaleString("default", { month: "long" });

  const contextValue: CalendarContextProps = {
    day,
    setDay,
    monthNumber,
    setMonthNumber,
    year,
    setYear,
    openModal,
    setOpenModal,
    openConfirmDeleteModal,
    setOpenConfirmDeleteModal,
    monthName,
    eventsData,
    setEventsData,
    eventId,
    setEventId,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
