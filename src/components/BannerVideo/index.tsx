import { InlineWidget } from "react-calendly";

const BannerVideo = () => {
  return (
    <section className="background py-20">
      <div className="max-w-7xl mx-auto">
        <div>
          <img src="/logo/logo-dark-full.png" className="h-[250px] mx-auto" />
        </div>

        <div className="grid grid-cols-2 w-full gap-x-10 mt-[20px]">
          <div>
            <InlineWidget
              url="https://calendly.com/saulzavalamx/30min?hide_event_type_details=1"
              styles={{
                height: 700,
                width: 400,
                margin: "0px auto",
              }}
            />
          </div>
          <div>
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
      </div>
    </section>
  );
};

export default BannerVideo;
