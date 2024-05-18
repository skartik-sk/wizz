"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import Link from "next/link";

const MiniProfile = () => {
  const { username } = useParams();

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

  return (
    <div>
      {getUserData ? (
        <div className="mini_profile">
          <div className="mini_profile_img"></div>
          <div className="mini_profile_info">
          <Link href={`/profile/${username}`} >
            <h2 className="user_full_name">{getUserData.name}</h2>
            <h4 className="user_username">@{username}</h4>
            </Link>
            <p className="user_bio">bio: {getUserData.bio}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default MiniProfile;
