interface DayCellProps {
  day: number;
  month: number;
  year: number;
}

const DayCell: React.FC<DayCellProps> = ({ day, month, year }) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const offset = firstDayOfMonth.getDay();

  return (
    <td className="p-5 hover:bg-slate-500">
      {day <= offset ? "" : day - offset}
    </td>
  );
};

export default DayCell;
