export const generateCalendar = (year: number, month: number) => {
  const currentDate = new Date(year, month);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const numberOfDays = lastDayOfMonth.getDate();

  const offset = firstDayOfMonth.getDay();

  const daysArray = Array.from(
    { length: numberOfDays + offset },
    (_, index) => index + 1
  );

  const numberOfWeeks = Math.ceil((offset + numberOfDays) / 7);

  const weeksArray = Array.from({ length: numberOfWeeks }, (_, weekIndex) =>
    daysArray.slice(weekIndex * 7, (weekIndex + 1) * 7)
  );

  return weeksArray;
};

export const weekDaysArray = Array.from({ length: 7 }, (_, index) => {
  const date = new Date(2024, 0, index);
  return date.toLocaleString("en", { weekday: "short" });
});
