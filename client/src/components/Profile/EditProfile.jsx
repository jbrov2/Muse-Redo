import { RiUser5Fill } from "@remixicon/react";

function EditProfile() {
  return (
    <>
      <section className="edit_prof xl:h-screen mt-[140px] xl:px-[200px] ">
        <div className="max-w-[1466px] mx-4 xl:mx-auto px-6 xl:px-0 items-center">
          <div className="container mx-auto ">
            <h2 className="h2 mb-8">Profile</h2>
            <div className="profile_id flex items-center xl:flex-row flex-col xl:outline outline-secondary px-4 py-8 rounded-xl xl:gap-60">
              {/*Place Holder */}
              <div className=" flex flex-col items-center">
                <RiUser5Fill size={250} />
                <p className="cursor-pointer">Change Icon</p>
              </div>

              <div className="flex flex-col ">
                <form action="" className="flex flex-col">
                  <label htmlFor="d_name" id="d_name">
                    Display Name
                  </label>
                  <input type="text" id="d_name" placeholder="Go Crazy" />
                  <label htmlFor="status" id="status">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    placeholder="Type in your status"
                  />
                  <button type="submit" className="btn btn-primary mt-4">
                    {" "}
                    Submit all
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-row xl:flex-col mt-20  ">
              <form action="" className="flex flex-col w-full">
                <h3 className="h3">Bio</h3>
                <textarea
                  name="bio"
                  id="bio"
                  rows="4"
                  placeholder="Tell us about yourself..."
                ></textarea>
                <button type="submit" className="btn btn-primary mt-8">
                  Confirm Bio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
