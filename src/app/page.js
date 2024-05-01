"use client"
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useEnsName } from 'wagmi'
import { useReadContract } from 'wagmi'
import { BaseError, useWriteContract } from 'wagmi' 
import { abi } from './abi'

export default function Home() {
  const { address } = useAccount()
  const { data: hash,error,  writeContract } = useWriteContract()

  async function submit() { 
    console.log("function called")
     writeContract({ 
      address: '0x08D5ED9d72dF091ce880Afd193bDEf2fA63D3975', 
      abi, 
      functionName: 'changeNumber', 
      args: [BigInt(5)], 
    }) 
     console.log("hash:",hash)
      console.log("error:",error)
  } 
  
  return (
    <>
      <h1>Home</h1>
      <ConnectButton />
      <h2>Account</h2>
      <p>Address: {address}</p>
      <button onClick={submit} >Change Number</button>
    </>
  );
}
