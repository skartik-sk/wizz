"use client";
import React, { useState } from "react";

const RegPage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <>
      <div className="flex h-[80%] ">
        <div className="w-full h-[100vh] flex-[0.7] m-4 flex flex-col justify-center  align-middle p-32">
          <div className="flex justify-between w-full ">
            <div className="m-4">
              <div className="text-white text-3xl font-bold">
                Create your account
              </div>
              <div className="text-white">get started with wizz</div>
            </div>
            <div>
              <div className="w-48">
                <div className="space-y-6  py-4 bottom-0 flex flex-col ">
                  <button
                    onClick={() => setClicked(1)}
                    className="bg-[#106CF9] py-3  w-[90%] text text-white border-none  rounded-xl"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <input
              className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="What should we call you."
            />
            <input
              className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Choose the coolest Username"
            />
          </div>
        <div className="flex md:flex-row flex-col">
            <input
              className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email address"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Choose Image File"
            />
          </div>
          <div className="flex">
            <input
              className="appearance-none block w-full bg-[#34374D]  text-white rounded-xl py-4 px-4 m-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write a crazy bio"
            />
          </div>
          <div className="w-[30%] m-4">
            <div className="space-y-6 py-4 bottom-0 flex flex-col ">
              <button
                onClick={() => setClicked(1)}
                className="bg-[#7501E9] py-3  w-[90%] text text-white border-none  rounded-xl"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[0.5]">

<div  className="  bg-contain bg-[url(https://github.com/SingupalliKartik/wiz/blob/main/src/app/register/Group165.png?raw=true)] top-[6rem] right-[16rem] flex flex-col justify-between ">
  <img
    className="rounded-full h-36 w-36 "
    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  />
  <div className="text-white">
    <div className="font-medium text-lg text-opacity-60">Welcome to</div>
    <div className="font-bold text-2xl text-opacity-90">Wizz</div>
  </div>
</div>
          </div>

        
      </div>
    </>
  );
};

export default RegPage;
