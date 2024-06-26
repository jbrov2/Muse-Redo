function Hero() {
  return (
    <>
      <section className="hero h-[640px] xl:h-[840px] relative z-20 ">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start relative z-20">
          <div className="hero_text w-full maw-w-[567] flex flex-col items-center xl:items-start text-center xl:text-left relative z-30">
            <h1 className="header_title h1 mb-8 hover:text-accent cursor-pointer transition-all duration-500">
              Muse
            </h1>
            <p className="mb-8">
              The bridge between{" "}
              <span className="spotify hover:text-[#1DB954] transition-all duration-500 cursor-pointer">
                Spotify
              </span>{" "}
              and{" "}
              <span className="soundcloud hover:text-[#F26F23] transition-all duration-500 cursor-pointer">
                Soundcloud
              </span>
            </p>
            <button className="btn btn-primary">Join Today</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
