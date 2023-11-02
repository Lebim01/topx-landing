import Timer from "../Timer/Timer";

const Conference = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="px-4 space-y-8 py-20 md:px-20">
          <h3 className="text-3xl font-semibold text-blue-500 font-barlow">
            ¿QUIÉN ES SAUL ZAVALA? <br />
            FUNDADOR Y CEO TOP X
          </h3>
          <p className="text-blue-600 text-xl font-barlow">
            CREADOR DEL PROYECTO MAS AMBICIOSO DE LA INDUSTRIA DEL NETWORK
            MARKETING “LA ERA DORADA DEL MULTINIVEL” <br />
            <br />7 CIFRAS A SUS 20´S <br />
            AUTOR BESTSELLER DEL LIBRO “OBSESION”
            <br /> MAS DE 6 AÑOS DE EXPERIENCIA EN MLM
            <br /> SPEAKER INTERNACIONAL CERTIFICADO CREADOR DE ORGANIZACIONES A
            NIVEL MUNDIAL
          </p>
          <Timer />
        </div>
      </div>
    </section>
  );
};
export default Conference;
