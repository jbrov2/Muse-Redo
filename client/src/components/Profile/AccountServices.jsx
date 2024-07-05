import { RiSoundcloudFill, RiSpotifyFill } from "@remixicon/react";

function AccountServices() {
  const handleSpotify = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "GET",
      });
      if (response.ok) {
        console.log("Redirect to Spotify Authorization...");
        window.location.href = await response.text();
      } else {
        console.error(
          "Failed to initiate Spotify Authorization: ",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error occurred during the process:", error);
    }
  };
  return (
    <>
      {/*Dont forget to connect backend to check if they are connected, the button changes on the connection */}
      <section className="Account_Services xl:h-screen mt-[200px] xl:px-[200px]">
        <div className="max-w-[1466px] mx-4 xl:mx-auto px-6 xl:px-0 items-center">
          <div className="container mx-auto">
            <h2 className="h2 mb-8">Services</h2>
            <h3 className="h3 text-left mb-8">Connected Services</h3>
            <div className="flex items-center flex-col">
              {" "}
              {/*Item 1 */}
              <div className="flex xl:flex-row flex-col gap-8 outline outline-soundcloud items-center mb-8 p-4 rounded-lg w-full justify-between">
                <div className="flex">
                  <RiSoundcloudFill className="mr-4 text-soundcloud" />
                  <p>SoundCloud</p>
                </div>
                <button className="btn btn-primary hover:bg-soundcloud">
                  Login
                </button>
              </div>
              {/*Item 2 */}
              <div className="flex  xl:flex-row flex-col gap-8 outline outline-spotify items-center mb-8 p-4 rounded-lg w-full justify-between">
                <div className="flex">
                  <RiSpotifyFill className="mr-4 text-spotify" />
                  <p>SoundCloud</p>
                </div>
                <button
                  className="btn btn-primary hover:bg-spotify"
                  onClick={handleSpotify}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountServices;
