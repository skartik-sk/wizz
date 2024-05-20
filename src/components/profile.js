"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import { PostCard } from ".";

const Profile = () => {
  const { username } = useParams();
  const arr = ["a","B","c"];
  //retun full user profile by address////////////////////////
  const {
    data: getUserData,
    error: getUserError,
    isPending: getUserIsPending,
  } = useReadContract({
    abi,
    address: deployementAddress,
    functionName: "getUserStructByUsername",
    args: [username],
  });

  useEffect(() => {
    console.log("getUserData:", getUserData);
    console.log("getUserError:", getUserError);
    console.log("getUserIsPending:", getUserIsPending);
  }, [getUserData]);

  // return (
  //   <div>
  //     {getUserData ? (
  //       <div className="main_profile_section">
  //         <div className="user_profile_banner_img"></div>
  //         <div className="user_info">
  //           <h2 className="user_full_name">{getUserData.name}</h2>
  //           <h4 className="user_username">@{username}</h4>
  //           <p className="user_bio">bio: {getUserData.bio}</p>
  //           <div className="user_followers">
  //             <Link href={`/${username}/followers`}>
  //               <p>followers: {getUserData.followers.length}</p>
  //             </Link>
  //             <Link href={`/${username}/following`}>
  //               <p>following: {getUserData.following.length}</p>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <h1>Loading...</h1>
  //     )}
  //   </div>
  // );
  return (
    <>
      <div className="w-3/4  flex flex-col  p-4">

    
        <div className="text-white  flex flex-col  space-y-1">
          <div>
            <img 
              className="w-full h-36 rounded-xl"
              src="https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxiYW5uZXJ8ZW58MHx8MHx8fDA%3D"  alt=""
            />
          </div>
          <div className="px-4">
          <div>
            <div className=" py-2 -mt-16 flex space-x-4  justify-between align-baseline ">
              <div className="flex space-x-4 align-end">
                <img
                  className="rounded-full h-28 w-28"
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"alt=""
                />
              </div>
              <div className="flex flex-col  justify-end align-bottom">
                <button className="py-1 px-10 flex-col align-bottom justify-end text-white border-while border-2  rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white justify-center">
            <div className="text-3xl font-semibold">Name</div>
            <div className=" text-[#A4A4A4]">@UserName</div>
          </div>
          <div className=" my-3">
            Stop scratching your head all day, searching right tool to start
            with, betterbuild is your all in one place.
          </div>
          <div className="flex space-x-4">
            <div className="flex space-x-2 align-middle">
              <div className="text-lg font-semibold ">37</div>
              <div className="flex flex-col  justify-center">Followers</div>
            </div>
            <div className="flex space-x-2 align-middle">
              <div className="text-lg font-semibold ">137</div>
              <div className="flex flex-col  justify-center">Followers</div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className=" flex flex-col align-middle p-3 my-5 ">
          <div className="sticky top-0 bg-[#1D1F26] bg-opacity-85 bg-blend-saturation ">
        
            <div className="text-[#A4A4A4] text-opacity-90 font-bold sticky  border-b-[#393C49] my-3  border-b-2 d  flex justify-between w-full">
              <button>Post</button> <button>Achivment</button>{" "}
              <button>Work</button> <button>blog</button>
            </div>  </div>
            <div className="my-4 space-y-7">
              {arr.map((item, index) => (
                <div key={index}>
                  <PostCard />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Profile;
