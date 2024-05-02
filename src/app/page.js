"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useEnsName } from "wagmi";
import { useReadContract } from 'wagmi'
import { BaseError, useWriteContract } from "wagmi";
import { abi } from "./abi";
import React, { useEffect, useState } from "react";

export default function Home() {
  const { address } = useAccount();
  const { data: hash, error, writeContract } = useWriteContract();
  const [number, setNumber] = useState(7);

  useEffect(() => {
    getnumber();
  }, []);

  const { data: balance } = useReadContract({
    abi,
      address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
      functionName: "getNumber",
  })

  const getnumber = async () => {
    console.log("get number function called");
    const result = await useReadContract({
      abi,
      address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
      functionName: "getNumber",
    }).then ((result) => { setNumber(result);console.log("result:", result); });
    
    console.log("result:", result);
  };

  async function submit() {
    console.log("function called");
    await writeContract({
      address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
      abi,
      functionName: "changeNumber",
      args: [13],
    }).then((result) => {             console.log("hash:", hash);
                console.log("error:", error); });
    
  }

  return (
    <>
      <h1>Home</h1>
      <ConnectButton />
      <h2>Account</h2>
      <p>Address: {address}</p>
      <button onClick={submit}>Change Number</button>
      <h2>Number</h2>
      <p>Balance: {balance?.toString()}</p>
      <h2>{hash}</h2>
    </>
  );
}
