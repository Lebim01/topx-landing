const Register = () => {
  return (
    <section className='background'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col px-4 space-y-10 py-12 md:flex-row'>
          <div className='space-y-8'>
            <h3 className=' font-bold text-2xl text-white font-barlow  '>
              Al registrarte hoy, llévate gratis nuestro{' '}
              <span className='whitespace-nowrap'>E-Book</span> “Cómo ganar
              dinero sin arriesgar tu capital”
            </h3>
            <p className='text-white font-barlow'>
              Que incluye un capítulo de regalo para desmantelar sesgos y
              maximizar las probabilidades favorables de tu trading.
            </p>
            <div className='w-full flex justify-center pt-3'>
              <button className='bg-blue-600 font-barlow text-white uppercase rounded-full px-20 py-3 font-bold hover:bg-blue-500'>
                ¡Registrate Ahora!
              </button>
            </div>
          </div>

          <img
            className='w-72 mx-auto'
            src='./tablet.png'
            alt='tablet ebook image'
          />
        </div>
      </div>
    </section>
  );
};
export default Register;
