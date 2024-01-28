import { weekDaysArray } from "../services/utils";

const WeekDays = () => {
  return (
    <tr>
      {weekDaysArray.map((day) => (
        <th className="text-slate-500" key={day}>{day}</th>
      ))}
    </tr>
  );
};

export default WeekDays;
