import useCountdown from '../../hooks/useCountdown';
import Count from './components/Count';

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown(1701000002341);
  return (
    <div className='flex justify-around py-5 font-barlow'>
      <Count value={days} label='DÍAS' />
      <Count value={hours} label='HRS.' />
      <Count value={minutes} label='MIN.' />
      <Count value={seconds} label='SEG.' />
    </div>
  );
};
export default Timer;
