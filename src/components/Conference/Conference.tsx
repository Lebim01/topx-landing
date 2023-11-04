import Timer from "../Timer/Timer";
import { RiSendPlane2Fill } from "react-icons/ri";
import SaulZavala from '../../assets/Saul.jpg';

const Conference = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="px-4 space-y-8 py-20 md:px-0 text-black">
          <h3
            className="text-[40px] md:text-[60px] font-bold text-center underline underline-offset-8"
            style={{ fontFamily: "source-code" }}
          >
            ¿QUIÉN ES <span className="whitespace-nowrap">SAÚL ZAVALA</span>?
            <br />
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <div>
              <ul className="text-xl md:text-3xl font-medium">
              <li className="flex items-center space-x-2">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>FUNDADOR Y CEO TOP X</span>
              </li>
              <li className="flex items-center space-x-2 mt-[20px]">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>
                  CREADOR DEL PROYECTO MAS AMBICIOSO DE LA INDUSTRIA DEL NETWORK
                  MARKETING “LA ERA DORADA DEL MULTINIVEL”
                </span>
              </li>
              <li className="flex items-center space-x-2 mt-[20px]">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>7 CIFRAS A SUS 20´S</span>
              </li>
              <li className="flex items-center space-x-2 mt-[20px]">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>AUTOR BESTSELLER DEL LIBRO “OBSESION”</span>
              </li>
              <li className="flex items-center space-x-2 mt-[20px]">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>MAS DE 6 AÑOS DE EXPERIENCIA EN MLM</span>
              </li>
              <li className="flex items-center space-x-2 mt-[20px]">
                <RiSendPlane2Fill
                  style={{ display: "inline", minWidth: 30, color: "#a67c00" }}
                />
                <span>
                  SPEAKER INTERNACIONAL CERTIFICADO CREADOR DE ORGANIZACIONES A
                  NIVEL MUNDIAL
                </span>
              </li>
              </ul>
            </div>
            <img 
              className="max-w-md"
              src={SaulZavala}
              alt="tablet ebook image"
            />
          </div>
          <br />
          <br />
          <h3 className="text-black font-bold text-center text-[40px] mt-[40px]">
            CERRAMOS EL EQUIPO EN:
          </h3>
          <Timer />
        </div>
        
      </div>
    </section>
  );
};
export default Conference;
