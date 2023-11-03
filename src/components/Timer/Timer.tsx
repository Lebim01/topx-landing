import useCountdown from "../../hooks/useCountdown";
import Count from "./components/Count";
import dayjs from "dayjs";

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    dayjs().endOf("week").toDate().getTime()
  );
  return (
    <div className="flex justify-around py-4 font-barlow">
      <Count value={days} label="DÍAS" />
      <Count value={hours} label="HRS." />
      <Count value={minutes} label="MIN." />
      <Count value={seconds} label="SEG." />
    </div>
  );
};
export default Timer;
