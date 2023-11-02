function App() {
  return (
    <>
      <section className='background py-40'></section>
      <section>
        <div className='max-w-7xl mx-auto'>
          <div className='px-4 space-y-8 py-20'>
            <h3 className=' font-bold text-2xl text-blue-500 font-barlow'>
              Conferencia Especial de Nuestro CEO: Gana dinero sin poner en
              riesgo tu propio Dinero
            </h3>
            <p className='text-blue-600 text-lg leading-6 font-barlow'>
              Únete a nosotros en nuestro gran evento de aniversario y descubre
              todas las herramientas e innovaciones en las que hemos trabajado
              en Impulse para que puedas convertirte en un trader profesional y
              rentable utilizando el capital de nuestra compañía.
            </p>
            <div className='flex justify-around py-5 font-barlow'>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>00</span>
                <span className='text-blue-600 uppercase'>DIAS</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>00</span>
                <span className='text-blue-600 uppercase'>HRS.</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>00</span>
                <span className='text-blue-600 uppercase'>MIN.</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-blue-600 font-bold text-2xl'>00</span>
                <span className='text-blue-600 uppercase'>SEG.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='background py-40'></section>
    </>
  );
}

export default App;
