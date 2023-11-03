import { useCallback, useState } from "react";
import { PopupButton } from "react-calendly";
import { FaChevronDown } from "react-icons/fa";

const Register = () => {
  const [render, setRender] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cb = useCallback((ref: any) => {
    setRender(ref);
  }, []);

  return (
    <section className="background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col px-4 space-y-10 py-12 md:flex-row md:space-y-0 md:py-20">
          <div className="space-y-6 md:max-w-3xl flex flex-col">
            <h3 className="text-[1.8rem] leading-9 font-semibold text-white font-barlow flex-1">
              ¡No esperes más! Reserva tu cita Zoom ahora y transforma tu futuro
              hoy. ¡El tiempo se agota! Haz clic aquí y asegura tu espacio.
            </h3>
            <div className="w-max flex flex-col items-center pt-3 md:justify-start space-y-4 mx-auto md:mx-0">
              <FaChevronDown style={{ color: "white", fontSize: 40 }} />

              {render && (
                <PopupButton
                  className="bg-blue-600 font-barlow text-white uppercase rounded-full px-20 py-4 text-[20px] font-semibold hover:bg-blue-500 tracking-widest"
                  url="https://calendly.com/saulzavalamx/30min"
                  /*
                   * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                   * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                   */
                  rootElement={render}
                  text="¡Agenda Ahora!"
                />
              )}
            </div>
            <div id="popup" ref={cb}></div>
          </div>

          <img
            className="w-72 mx-auto"
            src="/logo/logo-light-streamline.png"
            alt="tablet ebook image"
          />
        </div>
      </div>
    </section>
  );
};
export default Register;
