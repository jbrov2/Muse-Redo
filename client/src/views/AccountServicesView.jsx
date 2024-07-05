import AccountServices from "../components/Profile/AccountServices";
import AccountNav from "../components/accountNavBar";

function AccountServicesView() {
  return (
    <>
      <div className="bg-primary ">
        <AccountNav />
        <AccountServices />
      </div>
    </>
  );
}

export default AccountServicesView;
