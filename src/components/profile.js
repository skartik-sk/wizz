"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";

const profile = () => {
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
        <div className="main_profile_section">
          <div className="user_profile_banner_img"></div>
          <div className="user_info">
            <h2 className="user_full_name">{getUserData.name}</h2>
            <h4 className="user_username">@{username}</h4>
            <p className="user_bio">bio: {getUserData.bio}</p>
            <div className="user_followers">
              <Link href="/coolsem/followers">
                <p>followers: {getUserData.followers.length}</p>
              </Link>
              <Link href="/coolsem/following">
                <p>following: {getUserData.following.length}</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default profile;
