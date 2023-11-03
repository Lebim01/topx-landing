import Timer from "../Timer/Timer";

const Conference = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="px-4 space-y-8 py-20 md:px-20">
          <h3
            className="text-[60px] font-bold text-blue-600 text-center underline underline-offset-8"
            style={{ fontFamily: "source-code" }}
          >
            ¿QUIÉN ES SAÚL ZAVALA?
            <br />
          </h3>
          <span className="w-full text-[60px] font-bold text-blue-600 text-center"></span>

          <ul
            className="text-blue-600 text-3xl font-medium"
            style={{
              listStyle: "disc",
            }}
          >
            <li>FUNDADOR Y CEO TOP X</li>
            <li className="mt-[20px]">
              CREADOR DEL PROYECTO MAS AMBICIOSO DE LA INDUSTRIA DEL NETWORK
              MARKETING “LA ERA DORADA DEL MULTINIVEL”
            </li>
            <li className="mt-[20px]">7 CIFRAS A SUS 20´S </li>
            <li className="mt-[20px]">AUTOR BESTSELLER DEL LIBRO “OBSESION”</li>
            <li className="mt-[20px]">MAS DE 6 AÑOS DE EXPERIENCIA EN MLM</li>
            <li className="mt-[20px]">
              SPEAKER INTERNACIONAL CERTIFICADO CREADOR DE ORGANIZACIONES A
              NIVEL MUNDIAL
            </li>
          </ul>
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
