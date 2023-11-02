import Calendar from './components/Calendar';
import City from './components/City';
import Live from './components/Live';

const Events = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 space-y-8 pb-20 pt-4 md:flex items-baseline justify-around md:px-8'>
          <Calendar />
          <City />
          <Live />
        </div>
      </div>
    </section>
  );
};
export default Events;
