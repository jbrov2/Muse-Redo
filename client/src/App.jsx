import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";

import UserAccount from "./views/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="signUp" element={<SignUpView />} />
          <Route path="/account" element={<UserAccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
