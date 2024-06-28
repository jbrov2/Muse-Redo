import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./components/User-Auth/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
