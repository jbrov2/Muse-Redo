import React from "react";

function Profile() {
  return (
    <section className="profile">
      <div className="bg-gray-700 min-h-screen flex justify-center items-center">
        <div className="max-w-[600px] mx-4 p-8 rounded-md bg-white">
          <h2 className="text-2xl mb-4 font-bold text-center">Profile</h2>
          {/* Profile Setup */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-blue-500 hover:underline">Account</a>
            <a href="#" className="text-blue-500 hover:underline">Services</a>
            <a href="#" className="text-red-500 hover:underline">Delete Account</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
