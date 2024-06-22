import Navbar from "../components/navBar";

function Home() {
  return (
    <>
      <div className="bg-primary">
        {/*NavBar */}
        <Navbar />
        {/*Temp Div */}
        <div className="h-[3000px]"></div>
      </div>
    </>
  );
}

export default Home;
