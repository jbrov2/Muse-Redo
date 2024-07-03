import { RiUser5Fill } from "@remixicon/react";

function EditProfile() {
  return (
    <>
      <section className="edit_prof xl:h-screen xl:p-[200px]">
        <div className="max-w-[1466px] mx-4 xl:mx-auto px-6 xl:px-0 items-center">
          <div className="container mx-auto">
            <h2 className="h2 mb-8">Profile</h2>
            <div className="flex items-center">
              <RiUser5Fill size={60} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
