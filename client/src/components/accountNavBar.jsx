import {
  RiAccountCircleFill,
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiCloseCircleFill,
  RiMenu4Fill,
} from "@remixicon/react";

import { useState, useEffect, useRef } from "react";

function AccountNav() {
  const [dropDown, setDropDown] = useState(false);
  const dropDownRef = useRef(null);
  const [toggleButton, setToggleButton] = useState(false);

  const handleNavBar = () => {
    setToggleButton(!toggleButton);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="top-0 py-[40px] w-full z-40 border-b border-gray-200 backdrop-filter backdrop:-blur-lg bg-opacity-30">
        <div className="container flex justify-between items-center h-full mx-auto ">
          <a href="#" className="flex items-center">
            <h3 className="h3 hover:scale-125 transition-all duration-500 lowercase">
              muse
            </h3>
          </a>
          <nav className="flex-grow flex justify-end items-center">
            {/*For Mobile Users */}
            <div className="cursor-pointer lg:hidden" onClick={handleNavBar}>
              <RiMenu4Fill
                size={40}
                className="hover:text-accent hover:scale-125 transition-all duration-500"
              />
            </div>
            <ul className="hidden lg:flex justify-center gap-12 mr-8 uppercase">
              <li className="flex justify-center cursor-pointer">
                <a>Support</a>
              </li>
            </ul>
            <div className="relative flex justify-center" ref={dropDownRef}>
              <div
                className="flex items-center cursor-pointer uppercase text-[20px] hover:text-accent duration-300 transition-all"
                onClick={handleDropDown}
              >
                <RiAccountCircleFill size={30} className="lg:mr-4 ml-4" />
                <span className="hidden lg:block">Profile</span>
                {dropDown ? (
                  <RiArrowUpSFill className="lg:ml-2" />
                ) : (
                  <RiArrowDownSFill className="lg:ml-2" />
                )}
              </div>
              {dropDown && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg min-w-[160px] z-20 flex flex-col">
                  <a
                    href="/account"
                    className="block px-4 py-2 text-gray-700 hover:text-accent"
                  >
                    Account
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:text-accent"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/*Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-primary transition-transform duration-300 z-50 ${
          toggleButton ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {" "}
        <div className="flex flex-row justify-end p-4">
          <RiCloseCircleFill className="icon" onClick={handleNavBar} />
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center h-full space-y-8 text-white">
          <ul className="flex flex-col items-center gap-8 uppercase">
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Edit Profile
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Services
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Change Password
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Delete Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AccountNav;
