"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {ContractFuncWegmiContext } from "@/context/ContractFuncWegmiContext";

export default function Home() {

  const {address,hash,submit,number} = useContext(ContractFuncWegmiContext);

  return (
    <>
      <h1>Home</h1>
      <ConnectButton />
      <h2>Account</h2>
      <p>Address: {address}</p>
      <button onClick={submit}>Change Number</button>
      <h2>Number</h2>
      <p>number: {number?.toString()}</p>
      <h2>{hash}</h2>
    </>
  );
}
