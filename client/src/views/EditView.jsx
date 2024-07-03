import EditProfile from "../components/Profile/EditProfile";
import AccountNav from "../components/accountNavBar";

function EditView() {
  return (
    <>
      <section className="bg-primary">
        <AccountNav />
        <EditProfile />
      </section>
    </>
  );
}

export default EditView;
