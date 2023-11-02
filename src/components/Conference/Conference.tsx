import Timer from '../Timer/Timer';

const Conference = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 space-y-8 py-20'>
          <h3 className=' text-3xl font-semibold text-blue-500 font-barlow'>
            Conferencia Especial de Nuestro CEO: <br />
            Gana dinero sin poner en riesgo tu propio Dinero
          </h3>
          <p className='text-blue-600 text-xl font-barlow'>
            Únete a nosotros en nuestro gran evento de aniversario y descubre
            todas las herramientas e innovaciones en las que hemos trabajado en
            Impulse para que puedas convertirte en un trader profesional y
            rentable utilizando el capital de nuestra compañía.
          </p>
          <Timer />
        </div>
      </div>
    </section>
  );
};
export default Conference;
