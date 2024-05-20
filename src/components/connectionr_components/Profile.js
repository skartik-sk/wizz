import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className="mb-3   pt-10 pb-3 flex space-x-4 ">
          <div className="">
            <img
              className="rounded-full h-20 w-20  "
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            />
          </div>
          <div className="flex flex-col text-white justify-center">
            <div className="text-xl font-semibold">Name</div>
            <div className="text-sm text-[#D9D9D9]">@UserName</div>
          </div>
        </div>
        <div className=" text-white border-b-[#393C49] mb-6  border-b-2 sticky top-0 bg-[#1D1F26] bg-opacity-85 bg-blend-saturation   ">
          <div className="flex space-x-4  my-3 ">
            <div className="flex space-x-2 align-middle">
              <div className="text-lg font-semibold ">37</div>
              <div className="flex flex-col  justify-center text-[#FBFBFB] text-opacity-90">Followers</div>
            </div>
            <div className="flex space-x-2 align-middle">
              <div className="text-lg font-semibold ">137</div>
              <div className="flex flex-col  justify-center text-[#FBFBFB] text-opacity-90">Followers</div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
