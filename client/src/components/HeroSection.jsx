function Hero() {
  return (
    <>
      <section className="hero h-[640px] xl:h-[840px] relative z-20 ">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start relative z-20">
          <div className="hero_text w-full maw-w-[567] flex flex-col items-center xl:items-start text-center xl:text-left relative z-30">
            <h1 className="h1 mb-8">Muse</h1>
            <p className="mb-8">The bridge between Spotify and Soundcloud</p>
            <button className="btn btn-primary">Join Today</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
