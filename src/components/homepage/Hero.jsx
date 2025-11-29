const Hero = () => {
  return (
    <section className="hero relative h-screen min-h-screen overflow-hidden fade-in">
      {/* Video Background */}
      <div className="cover absolute inset-0 -z-10">
        <iframe
          src="https://player.vimeo.com/video/927835289?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-screen w-screen h-[56.25vw]"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Bird's Eye View"
        ></iframe>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent -z-[1]"></div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-end h-full pb-fluid-lg text-center">
        <h1 className="text-fluid-xl sm:text-6xl font-headings text-navy-dark mb-4 fade-in-up stagger-1">
          Where River Meets Ocean
        </h1>
        <p className="text-fluid sm:text-2xl max-w-3xl px-4 text-navy-dark fade-in-up stagger-2">
          Experience serenity at Mazville Medhaya, Udupi's tranquil cottage
          resort
        </p>
      </div>
    </section>
  );
};

export default Hero;
