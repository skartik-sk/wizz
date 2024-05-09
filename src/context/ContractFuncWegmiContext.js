"use client";
import { createContext, useEffect, useState } from "react";
import { abi } from "./wizzAbi.js";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
import { BaseError, useWriteContract } from "wagmi";
import { LoginCookies, LoginAccountCookies } from "./LoginCookies.js";

export const ContractFuncWegmiContext = createContext();

export const ContractFuncProvider = ({ children }) => {
  // user address
  const { address } = useAccount();

  // Variables
  const contractAddress = "0x33c01b2a0C361D4eE6a4a17dC966D2500BaFc89b";
  // "0xE205ea38dC9c28D6472cebA1F839d5ede6984bF8";
  const contractAddressTest = "0x1B97C12E90D30877dbB641ddBFb929f89d342E0F";

  const [isAccountDataVal, setIsAccountData] = useState(false);

  //CHECK ACCOUNT WITH CONNECTED WALLET ADDRESS/////////////////


    const { data: isAccountData, error: isAccountError } =
      useReadContract({
        abi,
        address: contractAddress,
        functionName: "checkAccount",
        args: [address],
      });
  
    useEffect(() => {
      if (isAccountData !== undefined) {
        console.log("!isAccountData:", !isAccountData);
        LoginAccountCookies(!isAccountData);
      } else { 
        console.log("isAccountData else:", isAccountData);
        LoginAccountCookies(false);
      }
    }, [isAccountData]);


  //Check if wallet is connected and store in cookies if connected
  useEffect(() => {
    
    if (address) {
      console.log("Wallet connected");
      LoginCookies(true);
    } else {
      console.log("Wallet not connected");
      LoginCookies(false);
    }
    
  }, [address, isAccountData, isAccountError]);  

  //create user/////////////////////////////////////////////////////
  const {
    data: createUserData,
    error: createUserError,
    isPending: createUserIsPending,
    writeContract: createUserWriteContract,
  } = useWriteContract();

  const createUser = async (newUser) => {
    console.log("createUser function called");
    const { username, _name, email, address } = newUser;
    
       createUserWriteContract({
        address: contractAddress,
        abi,
        functionName: "createUser",
        args: [username, _name, email, address],
      });
      
      location.reload()
  };

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
    <ContractFuncWegmiContext.Provider
      value={{
        address,
        createUser,
        createUserIsPending,
        createUserError,
        createUserData,
      }}
    >
      {children}
    </ContractFuncWegmiContext.Provider>
  );
};
