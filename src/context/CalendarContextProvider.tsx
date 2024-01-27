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
  openAddEventModal: boolean;
  setOpenAddEventModal: React.Dispatch<React.SetStateAction<boolean>>;
  monthName: string;
  eventsData: EventData[] | null;
  setEventsData: React.Dispatch<React.SetStateAction<EventData[] | null>>;
  eventId: number | null;
  setEventId: React.Dispatch<React.SetStateAction<number | null>>;
  eventsPerDate: Date[] | null;
  setEventsPerDate: React.Dispatch<React.SetStateAction<Date[] | null>>;
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
  const [openAddEventModal, setOpenAddEventModal] = useState(false);
  const [eventsData, setEventsData] = useState<EventData[] | null>(null);
  const [eventId, setEventId] = useState<number | null>(null);
  const [eventsPerDate, setEventsPerDate] = useState<Date[] | null>(null);

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
    eventsPerDate,
    setEventsPerDate,
    openAddEventModal,
    setOpenAddEventModal,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
