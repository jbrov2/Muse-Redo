import DeleteAccount from "../components/Profile/DeleteAccount";
import AccountNav from "../components/accountNavBar";

function DeleteAccountView() {
  return (
    <div className="bg-primary">
      <AccountNav />
      <DeleteAccount />
      <div className="h-[3000px]"></div>
    </div>
  );
}

export default DeleteAccountView;
