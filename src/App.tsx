import BannerVideo from "./components/BannerVideo";
import Conference from "./components/Conference/Conference";
import Events from "./components/Events/Events";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <BannerVideo />
      <Conference />
      <Register />
      <Events />
      <div id="popup"></div>
    </>
  );
}

export default App;
