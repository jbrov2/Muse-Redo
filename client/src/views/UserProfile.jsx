import Account from "../components/Profile/Account";
import AccountNav from "../components/accountNavBar";

function UserAccount() {
  return (
    <>
      <div className="bg-primary">
        <AccountNav />
        <Account />
      </div>
    </>
  );
}

export default UserAccount;
