import Register from "../components/User-Auth/register"
import Footer from "../components/landing_page/Footer"

function SignUp(){
    return(
        <>
        <div className="bg-primary">
            {/*Register Componenet */}
            <Register/>
            <Footer/>

        </div>
        </>
    )
}
export default SignUp