"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContractFuncWegmiContext } from "@/context/ContractFuncWegmiContext";

export default function Home() {
  // const {address,createUser,createUserIsPending,createUserError,createUserData} = useContext(ContractFuncWegmiContext);

  // const [newUser, setNewUser] = useState({
  //   username: "",
  //   _name: "",
  //   email: "",
  //   address: "",
  // });

  // const createNewUser = async(e) => {
  //   e.preventDefault();
  //     await createUser(newUser);
  //     console.log("createUserData:", createUserData);
  // }

  return (
    <>
      <div className="center-contaigner">
        <h1>Home</h1>
        <ConnectButton />
      </div>

      {/* <p>Address: {address}</p> */}
      {/* <button onClick={submit}>Change Number</button> */}
      {/* <p>number: {number?.toString()}</p> */}
      {/* <h2>{hash}</h2> */}
      {/* <h2>Create User</h2>
      <input
        type="text"
        placeholder="username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="name"
        value={newUser._name}
        onChange={(e) => setNewUser({ ...newUser, _name: e.target.value })}
      />
      <input
        type="text"
        placeholder="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="address"
        value={newUser.address}
        onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
      />
      <button onClick={(e) => createNewUser(e)}>Create User</button> */}
    </>
  );
}
