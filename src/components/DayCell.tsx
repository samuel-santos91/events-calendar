interface DayCellProps {
  day: number;
  month: number;
  year: number;
  onClick: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

const DayCell: React.FC<DayCellProps> = ({ day, month, year, onClick }) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const offset = firstDayOfMonth.getDay();

  return (
    <td
      onClick={day > offset ? onClick : undefined}
      className={day > offset ? "p-5 hover:bg-slate-500" : "p-5"}
    >
      {day <= offset ? "" : day - offset}
    </td>
  );
};

export default DayCell;
