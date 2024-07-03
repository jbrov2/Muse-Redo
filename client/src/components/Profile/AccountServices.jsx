import { RiSoundcloudFill } from "@remixicon/react";

function AccountServices() {
  return (
    <>
      <section className="Account_Services xl:h-screen mt-[200px] xl:px-[200px]">
        <div className="max-w-[1466px] mx-4 xl:mx-auto px-6 xl:px-0 items-center">
          <div className="container mx-auto">
            <h2 className="h2 mb-8">Services</h2>
            <div className="flex items-center flex-col">
              {/*Item 1 */}
              <div className="flex bg-[#F26F23] w-full justify-between">
                <div className="flex">
                  <RiSoundcloudFill className="mr-4" />
                  <p>SoundCloud</p>
                </div>
                <button className="btn btn-primary">Connected</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountServices;
