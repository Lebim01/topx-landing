import Icon from './Icon';

const City = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <Icon src='./timer.png' alt='timerImage' />
      <span className='text-blue-400 font-semibold text-2xl md:text-3xl'>
        13:00 hrs
      </span>
      <span className='text-blue-400 font-semibold text-2xl leading-7 md:text-3xl'>
        Argentina
      </span>
    </div>
  );
};
export default City;
