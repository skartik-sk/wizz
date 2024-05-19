"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContractFuncWegmiContext } from "@/context/ContractFuncWegmiContext";

export default function Home() {
  return (
    <>
      <div className="center-contaigner font-poppins">
        <h1>Home</h1>
        <ConnectButton />
      </div>

      {/* <p>Address: {address}</p> */}
      {/* <button onClick={submit}>Change Number</button> */}
      {/* <p>number: {number?.toString()}</p> */}
      {/* <h2>{hash}</h2> */}
    </>
  );
}
