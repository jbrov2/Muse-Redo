import Hero from "../components/HeroSection";
import Navbar from "../components/navBar";

function Home() {
  return (
    <>
      <div className="bg-primary">
        {/*NavBar */}
        <Navbar />
        {/**Hero Section */}
        <Hero />
        {/*Temp Div */}
        <div className="h-[3000px]"></div>
      </div>
    </>
  );
}

export default Home;
