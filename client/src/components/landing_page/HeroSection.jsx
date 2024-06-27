import { useState } from "react";

function Hero() {
  const [spotifyHover, setSpotifyHover] = useState(false);
  const [soundCloudHover, setSoundCloudHover] = useState(false);
  const [museHover, setMuseHover] = useState(false);

  const museHovering = () => {
    setMuseHover(true);
  };

  const museNotHovering = () => {
    setMuseHover(false);
  };

  const soundCloudHovering = () => {
    setSoundCloudHover(true);
  };

  const soundCloudNotHovering = () => {
    setSoundCloudHover(false);
  };

  const spotifyHovering = () => {
    setSpotifyHover(true);
  };

  const spotifyNotHovering = () => {
    setSpotifyHover(false);
  };

  return (
    <>
      <section
        className={`hero  h-[640px] xl:h-[840px] relative z-20 mb-12 ${
          spotifyHover
            ? "bg-[#1DB954] transition-colors duration-700"
            : soundCloudHover
            ? "bg-[#F26F23] transition-all duration-700"
            : museHover
            ? "bg-accent transition-all duration-700"
            : "bg-primary transition-all duration-700"
        }`}
      >
        <div className="container  mx-auto h-full flex items-center justify-center xl:justify-start relative z-20">
          <div className="hero_text w-full maw-w-[567] flex flex-col items-center xl:items-start text-center xl:text-left relative z-30">
            <h1
              className="header_title h1 mb-8 hover:text-accent cursor-pointer transition-all duration-500"
              onMouseEnter={museHovering}
              onMouseLeave={museNotHovering}
            >
              muse
            </h1>
            <p className="mb-8">
              The bridge between{" "}
              <span
                className="spotify hover:text-[#1DB954] transition-all duration-500 cursor-pointer"
                onMouseEnter={spotifyHovering}
                onMouseLeave={spotifyNotHovering}
              >
                Spotify
              </span>{" "}
              and{" "}
              <span
                className="soundcloud hover:text-[#F26F23] transition-all duration-500 cursor-pointer"
                onMouseEnter={soundCloudHovering}
                onMouseLeave={soundCloudNotHovering}
              >
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
