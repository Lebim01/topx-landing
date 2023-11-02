import Icon from './components/Icon';

const Events = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 space-y-8 pb-20 pt-4 md:flex items-baseline justify-around md:px-8'>
          <div className='flex flex-col items-center font-barlow text-center'>
            <Icon src='./calendar.png' alt='calendarImage' />
            <span className='text-blue-400 font-medium text-xl uppercase md:text-3xl'>
              SABADO
            </span>
            <span className='text-blue-400 font-medium font-sans text-3xl uppercase tracking-tight leading-7 md:text-4xl'>
              30 septiembre
            </span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Icon src='./timer.png' alt='timerImage' />
            <span className='text-blue-400 font-semibold text-2xl md:text-3xl'>
              13:00 hrs
            </span>
            <span className='text-blue-400 font-semibold text-2xl leading-7 md:text-3xl'>
              Argentina
            </span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Icon src='./monitor.png' alt='monitorImage' />
            <span className='text-blue-400 font-semibold text-2xl leading-7 md:text-3xl'>
              Evento digital{' '}
              <span className='uppercase font-barlow font-medium  text-[1.3rem] md:text-[1.7rem]'>
                {' '}
                <br className='hidden md:block' />
                GRATUITO
              </span>
            </span>
            <span className='text-blue-400 font-semibold text-xl '>
              En vivo desde YouTube
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Events;
