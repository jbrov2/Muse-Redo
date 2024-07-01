import { RiArrowRightLine } from "@remixicon/react";

function AboutUs() {
  return (
    <>
      <section className="about mt-[400px] xl:mt-[400px] relative z-20">
        <div className="max-w-[1466px] mb-8 mx-4 xl:mx-auto px-6 xl:px-0 h-[368] items-center">
          {/**Container */}
          <div className="container mx-auto  xl:px-0">
            <h2 className="h2 text-left mb-8 text-secondary">
              The Best of Both Worlds
            </h2>
            <div className="flex flex-col gap-8">
              <p className="p text-secondary text-left font-light">
                muse aims to give users the freedom to listen to the artist they
                from the underground to the mainstream. All on one dedicated
                platform.
              </p>
              <div className="flex">
                <button className="btn btn-primary ">
                  Learn more <RiArrowRightLine />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
