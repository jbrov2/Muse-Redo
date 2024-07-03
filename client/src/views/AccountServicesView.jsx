import AccountServices from "../components/Profile/AccountServices";
import AccountNav from "../components/accountNavBar";

function AccountServicesView() {
  return (
    <>
      <div className="bg-primary">
        <AccountNav />
        <AccountServices />
        <div className="h-[3000px]"></div>
      </div>
    </>
  );
}

export default AccountServicesView;
