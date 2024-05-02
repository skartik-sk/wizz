"use client";
import { createContext } from "react";
import { abi } from "./abi.js";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { BaseError, useWriteContract } from "wagmi";

export const ContractFuncWegmiContext = createContext();

export const ContractFuncProvider = ({ children }) => {
  // user address
  const { address } = useAccount();

  //read number
  const { data: number } = useReadContract({
    abi,
    address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
    functionName: "getNumber",
  });

  //write number
  const { data: hash, error, writeContract } = useWriteContract();
  async function submit() {
    console.log("changeNumber function called");
    await writeContract({
      address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
      abi,
      functionName: "changeNumber",
      args: [11],
    }).then((result) => {
      console.log("hash:", hash);
      console.log("error:", error);
    });

    return hash;
  }

  return (
    <ContractFuncWegmiContext.Provider value={{address,hash,submit,number}}>
      {children}
    </ContractFuncWegmiContext.Provider>
  );
};
