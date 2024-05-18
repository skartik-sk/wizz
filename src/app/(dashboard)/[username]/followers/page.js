"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi, deployementAddress } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";

const Followers = () => {

    const { username } = useParams();

    //getting the list of addresses of user followers
    const {
        data,
        error,
        isPending,
      } = useReadContract({
        abi,
        address: deployementAddress,
        functionName: "getUserFollowersByUsername",
        args: [username],
      });

     //getting all users 
     const{ data:allUsers, isPending: allUsersPanding, error:allUsersError} = useReadContract({
        abi,
        address: deployementAddress,
        functionName: "getAllUserProfiles",
        args: [],
      });

    
      useEffect(() => {
        console.log(allUsers)
      }, [allUsers]);

  return (
    <div>
      {allUsers?.map((user, i) =>
      <div className="connection_user">
        <h1>{allUsers[i].name}</h1>
        <p>{allUsers[i].username}</p>
      </div>
      )}
    </div>
  )
}

export default Followers
