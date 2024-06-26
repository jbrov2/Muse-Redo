import { RiMenu4Fill, RiUserAddFill } from "@remixicon/react";
import { useState, useEffect } from "react";

function Navbar() {
  const [toggleButton, setToggleButton] = useState(false);
  const [screenBig, setScreenBig] = useState(window.innerWidth >= 1024);

  function handleNavBar() {
    setToggleButton(!toggleButton);
  }

  //FIX THE BUG
  //disable scrolling when the side menu is open
  useEffect(() => {
    function handleResize() {
      const isBigScreen = window.innerWidth >= 1024;
      setScreenBig(isBigScreen);

      if (!isBigScreen) {
        setToggleButton(false); // Close mobile menu if screen size is small
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <header
        className={`sticky top-0 py-[40px] z-40 border-b border-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30 ${
          toggleButton ? "transition-opacity duration-300 opacity-0" : ""
        }`}
      > */}
      <header className="sticky top-0 py-[40px] z-40 border-b border-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="container flex justify-between items-center h-full mx-auto">
          <a href="#" className="flex items-center">
            <h3 className="h3 hover:scale-125 transition-all duration-500 lowercase">
              Muse
            </h3>
          </a>
          <nav className="flex-grow flex justify-end items-center">
            {/* For Mobile Uses */}
            <div className="cursor-pointer lg:hidden" onClick={handleNavBar}>
              <RiMenu4Fill
                size={40}
                className="hover:text-accent hover:scale-125 transition-all duration-500"
              />
            </div>
            {/* For Desktop Uses */}
            <ul className="hidden lg:flex justify-center gap-12 mr-8 uppercase">
              <li className="flex justify-center">
                <a href="#">About Us</a>
              </li>
              <li className="flex justify-center">
                <a href="#">Services</a>
              </li>
              <li className="flex justify-center">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Sign Up button */}
          {screenBig && (
            <button className="btn btn-primary hover:scale-105 transition-all duration-500 uppercase">
              Sign Up
              <RiUserAddFill className="ml-2" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-primary transition-transform duration-300 z-50 ${
          toggleButton ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full space-y-8 text-white">
          {/* <a href="#" onClick={handleNavBar}>
            <h3 className="h3 hover:scale-125 transition-all duration-500 lowercase">
              Muse
            </h3>
          </a> */}
          <ul className="flex flex-col items-center gap-8 uppercase">
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                About Us
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Services
              </a>
            </li>
            <li className="flex justify-center">
              <a href="#" onClick={handleNavBar}>
                Contact
              </a>
            </li>
            <li className="mt-12">
              <a href="" className="text-3xl">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
