import { useEffect, useState } from 'react';
import { getRemainingTimeUntilMSTimestamp } from '../utils/countdownUtil';

const defaultRemainTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const useCountdown = (countdownTimestampMS: number) => {
  const [remainTime, setRemainTime] = useState(defaultRemainTime);

  useEffect(() => {
    const timerID = setInterval(() => {}, 1000);
    setRemainTime(getRemainingTimeUntilMSTimestamp(countdownTimestampMS));
    return () => clearInterval(timerID);
  }, [remainTime, countdownTimestampMS]);

  const { days, hours, minutes, seconds } = remainTime;

  return { days, hours, minutes, seconds };
};
export default useCountdown;
