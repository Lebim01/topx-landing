const Footer = () => {
  return (
    <section className="background">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="flex flex-col px-4 space-y-3 py-3">
          <div className="flex flex-row items-center mx-auto">
            <img
              className="w-28 mx-auto"
              src="/logo/logo-light-streamline.png"
              alt="tablet ebook image"
            />
            <h3 className="text-[2rem] leading-9 font-semibold text-white font-barlow flex-1">
              Top X
            </h3>
          </div>
          <div className="my-2 flex flex-col">
            <h3 className="text-[1.5rem] leading-9 font-semibold text-white font-barlow flex-1">
              Llegó la hora de que hagas historia en la industria del multinivel
            </h3>
          </div>
          <div className="my-2 flex flex-col mx-auto">
            <p className="text-[1.25rem] leading-9 text-white font-barlow flex-1">
              Monterrey, Nuevo León. México
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
