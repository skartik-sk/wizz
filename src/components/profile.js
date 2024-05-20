"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import { PostCard } from ".";
import Topbar from "./profile_components/Topbar";

const Profile = ({setClicked}) => {
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
       <Topbar/>
        <div>
          <div className=" flex flex-col align-middle p-3  ">
          <div className="sticky top-0 bg-[#1D1F26] bg-opacity-85 bg-blend-saturation ">
        
            <div className="text-[#A4A4A4]  font-bold sticky  border-b-[#393C49] mt-3 pb-2 border-b-2   flex justify-between w-full">
              <button>Post</button> <button>Achivment</button>{" "}
              <button>Work</button> <button>blog</button>
            </div>  </div>
            <div className="my-4 space-y-7">
              {arr.map((item, index) => (
                <div key={index}>
                  <PostCard setClicked={setClicked} />
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
