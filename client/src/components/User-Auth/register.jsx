import { RiCloseCircleFill } from "@remixicon/react"

import { useNavigate } from "react-router-dom"

function Register(){
    const navigate = useNavigate();

    const handleExit = () =>{
        navigate('/')
    }
    return(
        <>
        <section className="register mx-auto">            
            <div className="top-0 flex flex-row justify-end p-4">
                <RiCloseCircleFill
                    className="icon"
                    onClick={handleExit}
                />
            </div>
            <div className="max-w-[600px] mb-8 mx-4 md:h-screen pt-[100px] xl:mx-auto px-6 xl:px-0 h-[368] items-center">

                {/*Container */}
                <div className="container mx-auto  xl:p-0">
                        <h2 className="h2 mb-8"> Sign Up</h2>
                        <div className="form outline rounded-md p-4 ">
                            <form action="" className="flex flex-col ">
                            <label htmlFor="user" id="user">Username</label>
                            <input required type="text" name="user" id="user" />
                            <label htmlFor="email" id="email">Email</label>
                            <input required type="text" name="email" id="email" />
                            <label htmlFor="pwd" id="pwd">Password</label>
                            <input required type="password" name="pwd" id="pwd" />
                            <label htmlFor="confirm_pwd" id="confirm_pwd">Confirm Password</label>
                            <input required type="password" id="pwd" name="pwd" />
                            <input type="button" className="btn btn-primary mt-8 w-40" value='Submit'/>
                        </form> 
                        </div> 
                    </div>
                </div>
        </section>
        </>
    )
}

export default Register