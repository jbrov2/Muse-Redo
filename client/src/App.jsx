import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="signUp" element={<SignUpView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
