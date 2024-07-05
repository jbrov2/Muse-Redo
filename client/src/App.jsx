import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";

import UserAccount from "./views/UserProfile";
import EditView from "./views/EditView";
import AccountServicesView from "./views/AccountServicesView";
import ChangePassView from "./views/ChangePasswordView";
import DeleteAccountView from "./views/DeleteAccountView";

import DashView from "./views/DashView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="signUp" element={<SignUpView />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/account/profile" element={<EditView />} />
          <Route path="/account/services" element={<AccountServicesView />} />
          <Route path="/account/change-password" element={<ChangePassView />} />
          <Route
            path="/account/delete-account"
            element={<DeleteAccountView />}
          />
          <Route path="/home" element={<DashView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
