import React, { createContext, ReactNode, useState } from "react";

export interface CalendarContextProps {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  monthNumber: number;
  setMonthNumber: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  monthName: string;
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
    monthName,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
