import { InlineWidget } from "react-calendly";
import { FaChevronDown } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";

const BannerVideo = () => {
  const { width } = useWindowSize();

  return (
    <section className="background py-8 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-">
        <div>
          <h1
            className="text-white text-[30px] md:text-[70px] text-center font-bold tracking-[3px]"
            style={{
              fontFamily: "family-title",
            }}
          >
            ESTÁS A UN PASO DE UNIRTE A LA{" "}
            <span className="text-[#a67c00] whitespace-nowrap">ERA DORADA</span>
            <br />
            DEL MULTINIVEL
          </h1>
        </div>

        <div
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
          className="mt-[40px]"
        >
          <iframe
            src="https://player.vimeo.com/video/880704390?h=092f8223c8&autoplay=1&loop=1&byline=0&portrait=0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-[40px]">
          <p
            className="text-white text-center text-[20px] md:text-[40px] px-8"
            style={{
              fontFamily: "family-title",
            }}
          >
            Agenda tu cita. Tenemos sólo 27 lugares para personas comprometidas con generar a través del network marketing.{" "}
            <span className="font-bold">¡Te vemos en tu llamada!</span>
          </p>

          <div className="flex justify-center mt-[20px]">
            <FaChevronDown style={{ color: "white", fontSize: 40 }} />
          </div>
        </div>

        <div className="mt-[20px] md:mt-0">
          <InlineWidget
            url="https://calendly.com/saulzavalamx/30min?hide_gdpr_banner=1"
            styles={{
              height: width && width >= 1000 ? 700 : 850,
              width: width && width >= 1000 ? 1000 : 350,
              margin: "0px auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerVideo;
