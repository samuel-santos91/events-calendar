import React, { createContext, ReactNode, useState } from "react";

interface CalendarContextProps {
  monthNumber: number;
  setMonthNumber: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

export const CalendarContext = createContext<CalendarContextProps | null>(null);

interface CalendarContextProviderProps {
  children: ReactNode;
}

const CalendarContextProvider: React.FC<CalendarContextProviderProps> = ({
  children,
}) => {
  const currentDate = new Date();

  const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const contextValue: CalendarContextProps = {
    monthNumber,
    setMonthNumber,
    year,
    setYear,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;
