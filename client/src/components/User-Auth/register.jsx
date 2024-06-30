import { RiCloseCircleFill } from "@remixicon/react";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleExit = () => {
    navigate("/");
  };
  return (
    <>
      <section className="register mx-auto">
        <div className="top-0 flex flex-row justify-end p-4">
          <RiCloseCircleFill className="icon" onClick={handleExit} />
        </div>
        <div className="max-w-[600px] mb-8 mx-4 md:h-screen pt-[100px] xl:mx-auto px-6 xl:px-0 h-[368] items-center">
          {/*Container */}
          <div className="container mx-auto  xl:p-0">
            <h2 className="h2 mb-8"> Sign Up</h2>
            <div className="form outline rounded-md p-4 "></div>
          </div>
          <a href="" onClick={handleLogin}>
            <p className="pt-4 font-bold">Already have an account?</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Register;
