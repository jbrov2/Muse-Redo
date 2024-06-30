import Hero from "../components/landing_page/HeroSection";
import Navbar from "../components/navBar";
import Services from "../components/landing_page/Services";
import AboutUs from "../components/landing_page/AboutUs";
import Contact from "../components/landing_page/Contact";
import Footer from "../components/landing_page/Footer";

function Home() {
  return (
    <>
      <div className="bg-primary ">
        {/*NavBar */}
        <Navbar />
        {/**Hero Section */}
        <Hero />
        {/*About Us */}
        <AboutUs />
        {/*Services Section */}
        <Services />
        {/*Contact Section */}
        <Contact />
        {/*Footer*/}
        <Footer />
        {/*Temp Div */}
        {/* <div className="h-[3000px]"></div> */}
      </div>
    </>
  );
}

export default Home;
