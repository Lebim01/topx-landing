import Icon from './components/Icon';

const Events = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 space-y-8 pb-20 pt-4'>
          <div className='flex flex-col items-center font-barlow'>
            <Icon src='./calendar.png' alt='calendarImage' />
            <span className='text-blue-400 font-medium text-xl uppercase'>
              SABADO
            </span>
            <span className='text-blue-400 font-medium font-sans text-3xl uppercase tracking-tight leading-7'>
              30 septiembre
            </span>
          </div>
          <div className='flex flex-col items-center '>
            <Icon src='./timer.png' alt='timerImage' />
            <span className='text-blue-400 font-semibold text-2xl'>
              13:00 hrs
            </span>
            <span className='text-blue-400 font-semibold text-2xl'>
              Argentina
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <Icon src='./monitor.png' alt='monitorImage' />
            <span className='text-blue-400 font-semibold text-2xl'>
              Evento digital{' '}
              <span className='uppercase font-barlow font-medium  text-[1.3rem]'>
                GRATUITO
              </span>
            </span>
            <span className='text-blue-400 font-semibold text-xl'>
              En vivo desde YouTube
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
