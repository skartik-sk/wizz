"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import { BaseError, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

const Followers = () => {
  const { username } = useParams();
  const { address } = useAccount();

  //user followers array
  const { data, error, isPending } = useReadContract({
    abi,
    address: deployementAddress,
    functionName: "getUserFollowersByUsername",
    args: [username],
  });

  //getting all users
  const {
    data: allUsers,
    isPending: allUsersPanding,
    error: allUsersError,
  } = useReadContract({
    abi,
    address: deployementAddress,
    functionName: "getAllUserProfiles",
    args: [],
  });

  //select the followers from the list of allUsers according to the address array of followers in data.followers array
  console.log("data", data);
  const followers = allUsers?.filter((user) =>
    data?.includes(user.userAddress)
  );

  //////////////////////////////////////////////////////////////////////////

  const loginUserName = allUsers?.filter((user) => user.userAddress === address);
  console.log("loginUserName", loginUserName?.[0]?.username);

  // Login User following array
  const {
    data: followingData,
    error: followingError,
    isPending: followingPanding,
  } = useReadContract({
    abi,
    address: deployementAddress,
    functionName: "getUserFollowingByUsername",
    args: [loginUserName?.[0]?.username],
  });

  //check if the user in followers array is already followed by the login user
  const following = followers?.filter((user) =>
    followingData?.includes(user.userAddress)
  );

  //follow function
  const {
    data: followData,
    error: followError,
    isPending: followIsPending,
    writeContract: followWriteContract,
  } = useWriteContract();

  const follow = async (address) => {
    console.log("follow function called");
    followWriteContract({
      abi,
      address: deployementAddress,
      functionName: "follow",
      args: [address],
    });
  };

  //unfollow function
  const {
    data: unfollowData,
    error: unfollowError,
    isPending: unfollowIsPending,
    writeContract: unfollowWriteContract,
  } = useWriteContract();

  const unfollow = async (address) => {
    console.log("unfollow function called");
    unfollowWriteContract({
      abi,
      address: deployementAddress,
      functionName: "unfollow",
      args: [address],
    });
  };

  useEffect(() => {
    console.log("followers", followers);
    console.log("myfollowingData", followingData);
  }, [allUsers, followers, followingData]);

  return (
    <div>
      {followers?.map((user, i) => (
        <div key={i} className="connection_user">
          <Link href={`/profile/${followers[i].username}`}>
            <h1>{followers[i].name}</h1>
            <p>{followers[i].username}</p>
            <p>{followers[i].bio}</p>
          </Link>

          {following?.includes(user) ? (
            <button onClick={() => unfollow(followers[i].userAddress)}>
              Unfollow
            </button>
          ) : (
            <button onClick={() => follow(followers[i].userAddress)}>
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Followers;
