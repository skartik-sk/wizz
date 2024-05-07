"use client";
import { createContext, useEffect } from "react";
import { abi } from "./wizzAbi.js";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { BaseError, useWriteContract } from "wagmi";
import { LoginCookies } from "./LoginCookies.js";

export const ContractFuncWegmiContext = createContext();

export const ContractFuncProvider = ({ children }) => {

  // user address
  const { address } = useAccount();

  // Variables  
  const contractAddress = "0xE205ea38dC9c28D6472cebA1F839d5ede6984bF8";
  const contractAddressTest = "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F";

 
   //Check if wallet is connected and store in cookies if connected
   useEffect(() => {
    if (address == null) {

      console.log("Wallet not connected");
      LoginCookies(false);
    } else {
      console.log("Wallet connected");
      LoginCookies(true);
    }
  } , [address])
  

  //create user/////////////////////////////////////////////////////
  const { data: createUserData, error: createUserError,isPending: createUserIsPending, writeContract: createUserWriteContract } = useWriteContract();
  
  const createUser = async(newUser) => {
    console.log("createUser function called");
    const { username, _name, email, address } = newUser;
    try {
      await createUserWriteContract({
        address: contractAddress,
        abi,
        functionName: "createUser",
        args: [username, _name, email, address,],
      }).then((result) => { console.log("createUserData:", createUserData) });
    } catch (error) {
      throw new BaseError("Error creating user", error);
    }
  }

  //read number////////////////////////////////////////////////////
//   const { data: number } = useReadContract({
//     abi,
//     address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
//     functionName: "getNumber",
//   });

  //write number////////////////////////////////////////////////////////
//   const { data: hash, error, writeContract } = useWriteContract();
//   async function submit() {
//     console.log("changeNumber function called");
//     await writeContract({
//       address: "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F",
//       abi,
//       functionName: "changeNumber",
//       args: [11],
//     }).then((result) => {
//       console.log("hash:", hash);
//       console.log("error:", error);
//     });

//     return hash;
//   }

  return (
    <ContractFuncWegmiContext.Provider value={{address,createUser,createUserIsPending,createUserError,createUserData }}>
      {children}
    </ContractFuncWegmiContext.Provider>
  );
};
