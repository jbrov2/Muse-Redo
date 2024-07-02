import {
  RiDeleteBin5Fill,
  RiEdit2Fill,
  RiSettings4Fill,
  RiUserFill,
} from "@remixicon/react";

import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/account/profile");
  };

  const handleAccountServices = () => {
    navigate("/account/services");
  };

  const handlePassChange = () => {
    navigate("/account/change-password");
  };

  const handleDeleteAccount = () => {
    navigate("/account/delete-account");
  };

  return (
    <>
      <section className="prof py-[200px] xl:pt-[200px] h-screen">
        <div className="max-w-[1466px] mx-4 xl:mx-auto px-6 xl:px-0 h-[366] items-center">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <h2 className="h2 mb-8 ">Account</h2>
            </div>
            <div className="py-8 xl:py-0 w-full max-w-[1200px]">
              {/*Item */}
              <div className="prof_item bg-gray-700 p-[30px] mb-4 rounded-md">
                <a href="" className="flex" onClick={handleEditProfile}>
                  <RiUserFill className="mr-4" />
                  <p>Edit Profile</p>
                </a>
              </div>
              {/*Item */}
              <div className="prof_item bg-gray-700 p-[30px] mb-4 rounded-md">
                <a href="" className="flex" onClick={handleAccountServices}>
                  <RiSettings4Fill className="mr-4" />
                  <p>Services</p>
                </a>
              </div>
              {/*Item */}
              <div className="prof_item bg-gray-700 p-[30px] mb-4 rounded-md">
                <a href="" className="flex" onClick={handlePassChange}>
                  <RiEdit2Fill className="mr-4" />
                  <p>Change Password</p>
                </a>
              </div>
              {/*Item */}
              <div className="prof_item bg-gray-700 p-[30px] mb-4 rounded-md">
                <a href="" className="flex" onClick={handleDeleteAccount}>
                  <RiDeleteBin5Fill className="mr-4" />
                  <p>Delete Account</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Account;
