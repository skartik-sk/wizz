"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { abi } from "@/context/wizzAbi.js";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";


const profile = () => {

    const { username } = useParams();
    const { address } = useAccount();
    const contractAddress = "0x33c01b2a0C361D4eE6a4a17dC966D2500BaFc89b";

    //retun full user profile by address////////////////////////
  const {
    data: getUserData,
    error: getUserError,
    isPending: getUserIsPending,
    readContract: getUserReadContract,
  } = useReadContract(
    {
      abi,
      address: contractAddress,
      functionName: "getUser",
      args: [address],
    }
  );

    useEffect(() => {
        console.log("getUserData:", getUserData);
        console.log("getUserError:", getUserError);
        console.log("getUserIsPending:", getUserIsPending);
    }, [getUserData,address,getUserError,getUserIsPending]);


  return (
    <div>
      <div className="main_profile_section">
          <div className="user_profile_banner_img"></div>
          <div className="user_info">
            <h2 className="user_full_name">Sumit Choudhary</h2>
            <h4 className="user_username">@{username}</h4>
            <p className="user_bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quae.dolor sit amet consectetur adipisicing elit. Nemo,
            </p>
            <div className="user_followers">
              <Link href="/profile/coolsem/followers">
                <p>Followers: 200</p>
              </Link>
              <Link href="/profile/coolsem/following">
                <p>Following: 200</p>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default profile
