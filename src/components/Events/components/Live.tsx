import Icon from "./Icon";

const Live = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon src="./monitor.png" alt="monitorImage" />
      <span className="text-black font-semibold text-2xl leading-7 md:text-3xl">
        SE PIONERO
        <span className="uppercase font-barlow font-medium  text-[1.3rem] md:text-[1.7rem]">
          {" "}
          <br className="hidden md:block" />
          ¡ACTUA RAPIDO!
        </span>
      </span>
    </div>
  );
};
export default Live;
