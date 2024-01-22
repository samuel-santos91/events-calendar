import MonthSelector from "../components/MonthSelector";
import WeekDays from "../components/WeekDays";
import { generateCalendar } from "../services/utils";

const Calendar = () => {
  return (
    <div>
      <MonthSelector />
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          {generateCalendar(2024, 0).map((week, weekIndex) => (
            <tr key={weekIndex}>
              {/* {week.map((day, dayIndex) => (
                    // <td key={dayIndex}>{day <= offset ? "" : day - offset}</td>
                  ))} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
