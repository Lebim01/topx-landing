import useCountdown from './hooks/useCountdown';

function App() {
  const { days, hours, minutes, seconds } = useCountdown(1701000002341);
  return (
    <>
      <section className='background py-40'></section>
      <section>
        <div className='max-w-7xl mx-auto'>
          <div className='px-4 space-y-8 py-20'>
            <h3 className=' font-bold text-2xl text-blue-500 font-barlow'>
              Conferencia Especial de Nuestro CEO: <br />
              Gana dinero sin poner en riesgo tu propio Dinero
            </h3>
            <p className='text-blue-600 text-lg leading-6 font-barlow'>
              Únete a nosotros en nuestro gran evento de aniversario y descubre
              todas las herramientas e innovaciones en las que hemos trabajado
              en Impulse para que puedas convertirte en un trader profesional y
              rentable utilizando el capital de nuestra compañía.
            </p>
            <div className='flex justify-around py-5 font-barlow'>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>{days}</span>
                <span className='text-blue-600 uppercase'>DIAS</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>
                  {hours}
                </span>
                <span className='text-blue-600 uppercase'>HRS.</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>
                  {minutes}
                </span>
                <span className='text-blue-600 uppercase'>MIN.</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>
                  {seconds}
                </span>
                <span className='text-blue-600 uppercase'>SEG.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='background'>
        <div className='max-w-7xl mx-auto'>
          <div className='px-4 space-y-8 py-12'>
            <h3 className=' font-bold text-2xl text-white font-barlow  '>
              Al registrarte hoy, llévate gratis nuestro{' '}
              <span className='whitespace-nowrap'>E-Book</span> “Cómo ganar
              dinero sin arriesgar tu capital”
            </h3>
            <p className='text-white font-barlow'>
              Que incluye un capítulo de regalo para desmantelar sesgos y
              maximizar las probabilidades favorables de tu trading.
            </p>
            <div className='w-full flex justify-center'>
              <button className='bg-blue-600 font-barlow text-white uppercase rounded-full px-20 py-3 font-bold hover:bg-blue-500'>
                ¡Registrate Ahora!
              </button>
            </div>
            <img
              className='w-72 mx-auto'
              src='./tablet.png'
              alt='tablet ebook image'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
