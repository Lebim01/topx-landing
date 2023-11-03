import { InlineWidget } from "react-calendly";

const BannerVideo = () => {
  return (
    <section className="background py-8 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-white text-2xl text-center">
            LA ERA DORADA DEL MULTINIVEL
          </h1>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full md:space-x-10 mt-[20px] px-4">
          <div className="hidden md:block">
            <InlineWidget
              url="https://calendly.com/saulzavalamx/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              styles={{
                height: 600,
                width: 350,
                margin: "0px auto",
              }}
            />
          </div>
          <div className="pt-[40px]">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
          </div>
        </div>

        <div className="block md:hidden mt-[40px]">
          <InlineWidget
            url="https://calendly.com/saulzavalamx/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{
              height: 600,
              width: 350,
              margin: "0px auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerVideo;
