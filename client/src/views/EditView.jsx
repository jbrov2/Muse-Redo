import EditProfile from "../components/Profile/EditProfile";
import AccountNav from "../components/accountNavBar";

function EditView() {
  return (
    <>
      <section className="bg-primary">
        <AccountNav />
        <EditProfile />
        <div className="h-[3000px]"></div>
      </section>
    </>
  );
}

export default EditView;
