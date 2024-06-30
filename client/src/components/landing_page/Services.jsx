import { RiAlbumFill, RiSoundcloudFill, RiSpotifyFill } from "@remixicon/react";

function Services() {
  return (
    <>
      <section className="services mt-[400px] relative">
        <div className=" max-w-[1466px] mb-8 mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start">
          <div className="container mx-auto">
            <div className="services_top flex flex-col gap-8  xl:my-[60px]">
              <h2 className="h2  xl:mb-0 text-left">muse&apos;s services</h2>
              <p className="p xl:text-left max-w-2xl xl:max-w-none">
                muse is offering the ability for users to merge their Spotify
                and Soundcloud likes, and playlists. Along with a visually
                appealing UI.
              </p>
            </div>
          </div>
        </div>
        {/**Grid container */}
        <div className="container mx-auto mt-8 xl:mt-[-144px] relative z-10 flex justify-center">
          {/**Grid */}
          <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0 w-full max-w-[1200px]">
            {/*Grid Item*/}
            <div className="services_item outline outline-secondary p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center  text-center hover:scale-105 hover:-rotate-3 transition-all duration-300">
              <div className="mb-[15px]">
                <RiAlbumFill className="text-accent size-16 mx-auto" />
                <h3 className="h3 mb-[10px] font-bold ">Platforms you love</h3>
                <p className="font-light leading-normal max-w-[300px] ">
                  muse&apos;s main goal is to allow all users to access songs
                  that they love from different platforms.
                </p>
              </div>
            </div>
            {/*Grid Item*/}
            <div className="services_item outline outline-secondary p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center text-center hover:scale-105 hover:rotate-3 transition-all duration-300">
              <div className="mb-[15px]">
                <RiSpotifyFill className="text-accent size-16 mx-auto" />
                <h3 className="h3 mb-[10px] font-bold ">
                  Discover Music on Spotify
                </h3>
                <p className="font-light leading-normal max-w-[300px] ">
                  The ability to find artists and the songs you love on
                  <span> Spotify</span>.
                </p>
              </div>
            </div>
            {/*Grid Item*/}
            <div className="services_item outline outline-secondary p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center  text-center hover:scale-105 hover:-rotate-3 transition-all duration-300">
              <div className="mb-[15px]">
                <RiSoundcloudFill className="text-accent size-16 mx-auto" />
                <h3 className="h3 mb-[10px] font-bold  ">
                  Discover Music on SoundCloud
                </h3>
                <p className="font-light leading-normal max-w-[400px] ">
                  The ability to find artists and the songs you love on
                  SoundCloud.
                </p>
              </div>
            </div>
            {/*Grid Item*/}
            <div className="services_item outline outline-secondary p-[30px] rounded-[10px] min-h-[288px] flex flex-col items-center  text-center hover:scale-105 hover:rotate-3 transition-all duration-300">
              <div className="mb-[15px]">
                <RiAlbumFill className="text-accent size-16 mx-auto" />
                <h3 className="h3 mb-[10px] font-bold ">All in one place</h3>
                <p className="font-light leading-normal max-w-[300px] ">
                  Be able to merge all of the songs from the various platforms
                  into one main muse playlist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
