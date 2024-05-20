"use client";
import React, { useState,useEffect } from "react";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import Link from "next/link";
import ShortProfile from "../rightsidebar_compnents/ShortProfile";

const MiniProfile = () => {
  const { username } = useParams();
  const arr = ["a", "b", "c"];
  const arr2 = ["a", "b"];
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  }
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
  //       <div className="mini_profile">
  //         <div className="mini_profile_img"></div>
  //         <div className="mini_profile_info">
  //         <Link href={`/profile/${username}`} >
  //           <h2 className="user_full_name">{getUserData.name}</h2>
  //           <h4 className="user_username">@{username}</h4>
  //           </Link>
  //           <p className="user_bio">bio: {getUserData.bio}</p>
  //         </div>
  //       </div>
  //     ) : (
  //       <h1>Loading...</h1>
  //     )}
  //   </div>
  // );

  return (
    <div className="mb-5">
      
        <ShortProfile/>
      <div className="pl-14 text-white text-sm">
      Stop scratching your head all day, searching right tool to start with, betterbuild is your all in one place.
      </div>
    </div>
  );
};

export default MiniProfile;
