"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import { BaseError, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";

const Following = () => {
  const { username } = useParams();
  const { address } = useAccount();

  //user following array
  const { data, error, isPending } = useReadContract({
    abi,
    address: deployementAddress,
    functionName: "getUserFollowingByUsername",
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

   //select the following from the list of allUsers according to the address array of following in data.following array
   console.log(" following data", data);
   const following = allUsers?.filter((user) =>
     data?.includes(user.userAddress)
   );

  return (
    <div>
      {following?.map((user, i) => (
        <div className="connection_user">
          <Link href={`/profile/${following[i].username}`}>
            <h1>{following[i].name}</h1>
            <p>{following[i].username}</p>
            <p>{following[i].bio}</p>
          </Link>

          {/* {following?.includes(user) ? (
            <button onClick={() => unfollow(following[i].userAddress)}>
              Unfollow
            </button>
          ) : (
            <button onClick={() => follow(following[i].userAddress)}>
              Follow
            </button>
          )} */}
        </div>
      ))}
    </div>
  )
}

export default Following