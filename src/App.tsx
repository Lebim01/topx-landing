import Conference from './components/Conference/Conference';
import Events from './components/Events/Events';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <section className='background py-40'></section>
      <Conference />
      <Register />
      <Events />
    </>
  );
}

export default App;
