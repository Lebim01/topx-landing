import Icon from "./Icon";

const Calendar = () => {
  return (
    <div className="flex flex-col items-center font-barlow text-center">
      <Icon src="./calendar.png" alt="calendarImage" />
      <span className="text-black font-semibold text-2xl uppercase md:text-3xl">
        TE ESPERAMOS
      </span>
    </div>
  );
};
export default Calendar;
