import Icon from "./Icon";

const City = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon src="./timer.png" alt="timerImage" />
      <span className="text-black font-semibold text-2xl md:text-3xl">
        TU MOMENTO
        <br />
        HA LLEGADO
      </span>
    </div>
  );
};
export default City;
