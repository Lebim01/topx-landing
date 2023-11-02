import Icon from './components/Icon';

const Events = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 space-y-8 py-20'>
          <div className='flex flex-col items-center'>
            <Icon src='./calendar.png' alt='calendarImage' />
            <span className='text-blue-500 font-semibold text-xl uppercase tracking-tight'>
              SABADO
            </span>
            <span className='text-blue-500 font-semibold text-3xl uppercase tracking-tighter'>
              30 septiembre
            </span>
          </div>
          <Icon src='./timer.png' alt='timerImage' />
          <Icon src='./monitor.png' alt='monitorImage' />
        </div>
      </div>
    </section>
  );
};
export default Events;
