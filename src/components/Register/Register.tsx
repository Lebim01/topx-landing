const Register = () => {
  return (
    <section className='background'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col px-4 space-y-10 py-12 md:flex-row'>
          <div className='space-y-6 md:max-w-3xl'>
            <h3 className='text-[1.8rem] leading-9 font-semibold text-white font-barlow '>
              Al registrarte hoy, llévate gratis nuestro{' '}
              <span className='whitespace-nowrap'>E-Book</span> “Cómo ganar
              dinero sin arriesgar tu capital”
            </h3>
            <p className='text-white font-barlow text-lg'>
              Que incluye un capítulo de regalo para desmantelar sesgos y
              maximizar las probabilidades favorables de tu trading.
            </p>
            <div className='w-full flex justify-center pt-3 md:justify-start'>
              <button className='bg-blue-600 font-barlow text-white uppercase rounded-full px-20 py-4 font-semibold hover:bg-blue-500 tracking-widest'>
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
