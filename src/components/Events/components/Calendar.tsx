import Icon from './Icon';

const Calendar = () => {
  return (
    <div className='flex flex-col items-center font-barlow text-center'>
      <Icon src='./calendar.png' alt='calendarImage' />
      <span className='text-blue-400 font-medium text-xl uppercase md:text-3xl'>
        SABADO
      </span>
      <span className='text-blue-400 font-medium font-sans text-3xl uppercase tracking-tight leading-7 md:text-4xl'>
        30 septiembre
      </span>
    </div>
  );
};
export default Calendar;
