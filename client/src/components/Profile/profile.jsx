import {
  RiDeleteBin7Fill,
  RiSettingsFill,
  RiUser3Fill,
} from "@remixicon/react";

function Profile() {
  return (
    <>
      <section className="profile mx-auto">
        <div className="min-h-screen flex justify-center ">
          <div className="max-w-[600px] mb-8 mx-4 md:h-screen pt-[100px] ">
            {/*Container */}
            <div className="container mx-auto xl:p-0 ">
              <h2 className="h2 mb-8">Profile</h2>

              {/**Profile Setup */}
              <div className="prof_holder flex flex-col w-80 mx-auto bg-gray-700">
                <div className="prof_item flex py-2 px-4">
                  <a href="" className=" flex">
                    <RiUser3Fill className="mr-4" />
                    <p>Account</p>
                  </a>
                </div>
                <div className="prof_item flex py-2 px-4">
                  <a href="" className="flex">
                    <RiSettingsFill className="mr-4" />
                    <p>Services</p>
                  </a>
                </div>
                <div className="prof_item flex  py-2 px-4">
                  <a href="" className="flex">
                    <RiDeleteBin7Fill className="mr-4" />
                    <p>Delete Account</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
