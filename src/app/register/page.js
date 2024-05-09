"use client"
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContractFuncWegmiContext } from "@/context/ContractFuncWegmiContext";

const Register = () => {

  const {address,createUser,createUserIsPending,createUserError,createUserData} = useContext(ContractFuncWegmiContext);

  const [newUser, setNewUser] = useState({
    username: "",
    _name: "",
    email: "",
    address: "",
  });

  const createNewUser = async(e) => {
    e.preventDefault();
      await createUser(newUser);
      console.log("createUserData:", createUserData);
  }


  return (
    <div>
      Register
      <h2>Create User</h2>
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
      <button onClick={(e) => createNewUser(e)}>Create User</button>
    </div>
  )
}

export default Register