import { weekDaysArray } from "../services/utils";

const WeekDays = () => {
  return (
    <tr>
      {weekDaysArray.map((day) => (
        <th key={day}>{day}</th>
      ))}
    </tr>
  );
};

export default WeekDays;
