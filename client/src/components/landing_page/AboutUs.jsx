import { RiArrowRightLine } from "@remixicon/react";

function AboutUs() {
  return (
    <>
      <section className="about my-[80px] xl:mt-[200px] relative z-20">
        {/**Container */}
        <div className="container mx-auto mb-[400px] xl:px-0">
            <h2 className="h2 text-left mb-8 text-secondary">The Best of Both Worlds</h2>
            <div className="flex flex-col text-center gap-8">
              <p className="p text-secondary text-left font-light">
                  muse aims to give users the freedom to listen to the artist they from the underground to the mainstream. All on one dedicated platform.
              </p>
              <div className="flex">
                 <button className="btn btn-primary max-w-[310px]">Click here to learn more <RiArrowRightLine/> </button>
              </div>
               
              
            </div>

        </div>
      </section>
    </>
  );
}

export default AboutUs;
