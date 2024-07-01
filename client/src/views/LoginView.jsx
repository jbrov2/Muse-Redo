import Login from "../components/User-Auth/login";
import Footer from "../components/landing_page/Footer";


function LoginView() {
  return (
    <>
      <div className="bg-primary overflow-hidden">
        {/*Register Componenet */}
        <Login />
        <Footer/>
      </div>
    </>
  );
}
export default LoginView;
