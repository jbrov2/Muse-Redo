import { RiInstagramFill, RiMetaFill, RiTwitterXFill } from "@remixicon/react";

function Footer() {
  return (
    <footer className="footer mt-[80px] xl:mt-[400px] relative z-20  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px] text-center xl:text-left">
          <div className="footer_item w-full max-w-[400px] mx-auto mb-8 xl:mb-0">
            <a href="#" className="inline-block h-16 mb-4">
              <h2 className="text-3xl font-bold">muse</h2>
            </a>
            <p className="mb-8 text-xl">
              The bridge between Spotify and Soundcloud
            </p>
            <ul className="flex justify-center xl:justify-start mb-8 gap-6">
              <li>
                <a href="#" className="text-2xl">
                  <RiMetaFill />
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl">
                  <RiTwitterXFill />
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl">
                  <RiInstagramFill />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col xl:flex-row gap-12 xl:gap-[100px] xl:justify-end">
            <div className="footer_item">
              <h3 className="h3 mb-3">PAGES</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer_item">
              <h3 className="h3   mb-3 max-w-[260px] mx-auto xl:mx-0">
                CONTACT
              </h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p className="text-accent">musesupport@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-lg py-10 xl:border-t mt-8 xl:mt-0">
          Copyright &copy; muse 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
