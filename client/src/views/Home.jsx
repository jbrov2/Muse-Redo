import Hero from "../components/HeroSection";
import Services from "../components/Services";
import Navbar from "../components/navBar";

function Home() {
  return (
    <>
      <div className="bg-primary">
        {/*NavBar */}
        <Navbar />
        {/**Hero Section */}
        <Hero />
        {/*Services Section */}
        <Services />
        {/*Temp Div */}
        <div className="h-[3000px]"></div>
      </div>
    </>
  );
}

export default Home;
