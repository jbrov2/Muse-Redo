import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCloseCircleFill,
  RiEyeFill,
  RiEyeOffFill,
} from "@remixicon/react";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const USER_REGEX = useMemo(() => /^[A-z][A-z0-9-_]{3,23}$/, []);
  const PWD_REGEX = useMemo(() => /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%])$/, []);

  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState("");

  const [validStatus, setValidStatus] = useState({
    email: { isValid: false },
    user: {
      isValid: false,
      options: [
        { text: "Must Start with a letter", isValid: false },
        {
          text: "Must be anywhere from 2 - 23 characters long",
          isValid: false,
        },
      ],
    },
    pwd: {
      isValid: false,
      options: [
        { text: "Must contain at least one lowercase letter", isValid: false },
        { text: "Must contain at least one digit [0-9]", isValid: false },
        {
          text: "Must contain at least one special character [!@#$%]",
          isValid: false,
        },
        { text: "Passwords must match", isValid: false },
      ],
    },
    matchPwd: { isValid: false },
  });

  const navigate = useNavigate();

  const [pwdVisible, setPwdVisible] = useState(false);
  const [matchPwdVisible, setMatchPwdVisible] = useState(false);

  const togglePwdVisibility = () => {
    setPwdVisible(!pwdVisible);
  };

  const toggleMatchPwdVisibility = () => {
    setMatchPwdVisible(!matchPwdVisible);
  };

  useEffect(() => {
    const validateUser = () => {
      const isValid = USER_REGEX.test(user);
      setValidStatus((prevState) => ({
        ...prevState,
        user: {
          isValid,
          options: [
            { text: "Must start with a letter", isValid: /^[A-z]/.test(user) },
            {
              text: "Must be anywhere from 2 - 23 characters long",
              isValid: isValid && user.length >= 2 && user.length <= 23,
            },
          ],
        },
      }));
    };

    const validatePwd = () => {
      const isValid = PWD_REGEX.test(pwd);
      const isMatch = pwd === matchPwd;
      setValidStatus((prevState) => ({
        ...prevState,
        pwd: {
          isValid,
          options: [
            {
              text: "Must contain at least one lowercase letter",
              isValid: /[a-z]/.test(pwd),
            },
            {
              text: "Must contain at least one digit",
              isValid: /[0-9]/.test(pwd),
            },
            {
              text: "Must contain at least one special character [!@#$%]",
              isValid: /[!@#$%]/.test(pwd),
            },
            { text: "Passwords must match", isValid: isMatch },
          ],
        },
        matchPwd: {
          isValid: isMatch,
        },
      }));
    };

    const validateEmail = () => {
      const isValid = email.includes("@");
      setValidStatus((prevState) => ({
        ...prevState,
        email: { isValid },
      }));
    };

    validateUser();
    validatePwd();
    validateEmail();
  }, [USER_REGEX, PWD_REGEX, user, pwd, matchPwd, email]);

  const criteria = [
    {
      id: 1,
      criteria: "Username must contain at least: ",
      options: validStatus.user.options,
    },
    {
      id: 2,
      criteria: "Password must contain at least: ",
      options: validStatus.pwd.options,
    },
  ];

  const questions = [
    {
      id: 0,
      question: "Enter your email",
      value: email,
      setter: setEmail,
      type: "text",
      key: "email",
    },
    {
      id: 1,
      question: "Create your username",
      value: user,
      setter: setUser,
      type: "text",
      criteriaId: 1,
      key: "user",
    },
    {
      id: 2,
      question: "Create your password",
      value: pwd,
      setter: setPwd,
      type: pwdVisible ? "text" : "password",
      criteriaId: 2,
      key: "pwd",
    },
    {
      id: 3,
      question: "Re-enter your password",
      value: matchPwd,
      setter: setMatchPwd,
      type: matchPwdVisible ? "text" : "password",
      key: "matchPwd",
    },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const isCurrentStepValid = () => {
    const currentQuestionKey = questions[step].key;
    return validStatus[currentQuestionKey].isValid;
  };

  return (
    <>
      <section className="register mx-auto">
        <div className="top-0 flex flex-row justify-end p-4">
          <RiCloseCircleFill className="icon" onClick={handleExit} />
        </div>
        <div className="max-w-[600px] mb-8 mx-4 md:h-screen pt-[100px] xl:mx-auto px-6 xl:px-0 h-[368] items-center">
          <div className="container mx-auto xl:p-0">
            <h2 className="h2 mb-8"> Sign Up</h2>
            <div className="form outline rounded-md p-4">
              <div className="flex flex-col">
                <label>{questions[step]?.question || ""}</label>
                <div className="relative">
                  <input
                    type={questions[step]?.type}
                    value={questions[step]?.value}
                    onChange={(e) => questions[step]?.setter(e.target.value)}
                    className={`w-full ${
                      !validStatus[questions[step]?.key].isValid ? "error" : ""
                    }`}
                  />
                  {step === 2 && (
                    <div
                      className="absolute right-2  mt-2 top-2 cursor-pointer"
                      onClick={togglePwdVisibility}
                    >
                      {pwdVisible ? (
                        <RiEyeOffFill className="text-primary" />
                      ) : (
                        <RiEyeFill className="text-primary" />
                      )}
                    </div>
                  )}
                  {step === 2 && (
                    <div className="relative flex flex-col mt-4">
                      <label>{questions[3]?.question}</label>
                      <div className="relative">
                        <input
                          type={questions[3]?.type}
                          value={questions[3]?.value}
                          onChange={(e) => questions[3]?.setter(e.target.value)}
                          className={`w-full ${
                            !validStatus[questions[3]?.key].isValid
                              ? "error"
                              : ""
                          }`}
                        />
                        <div
                          className="absolute right-2 top-2 mt-2 cursor-pointer"
                          onClick={toggleMatchPwdVisibility}
                        >
                          {matchPwdVisible ? (
                            <RiEyeOffFill className="text-primary" />
                          ) : (
                            <RiEyeFill className="text-primary" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {!validStatus[questions[step]?.key].isValid && (
                    <p className="text-secondary font-bold text-xs pl-1 mt-2">
                      Please provide an appropriate response
                    </p>
                  )}
                  {questions[step]?.criteriaId && (
                    <div>
                      <p className="font-bold mt-8">
                        {
                          criteria.find(
                            (c) => c.id === questions[step]?.criteriaId
                          )?.criteria
                        }
                      </p>
                      <ul>
                        {criteria
                          .find((c) => c.id === questions[step]?.criteriaId)
                          ?.options.map((o, i) => (
                            <li
                              className={`text-sm mt-4 transition-all duration-500 ${
                                o.isValid ? "text-accent" : "text-gray-500"
                              }`}
                              key={i}
                            >
                              {o.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="btn btn-primary mr-8" onClick={handleBack}>
                    <RiArrowLeftLine />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={!isCurrentStepValid()}
                  >
                    {step === 2 ? "Done" : <RiArrowRightLine />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a href="#" onClick={handleLogin}>
            <p className=" pt-4 font-bold">Already have an account?</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Register;
