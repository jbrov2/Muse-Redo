import ChangePass from "../components/Profile/ChangePass";
import AccountNav from "../components/accountNavBar";

function ChangePassView() {
  return (
    <>
      <div className="bg-primary">
        <AccountNav />
        <ChangePass />
        <div className="h-[3000px]"></div>
      </div>
    </>
  );
}

export default ChangePassView;
