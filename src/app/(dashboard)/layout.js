"use client";
import Profile from "@/components/profile";
import { useState } from "react";
import "./dashboard_layout.css";
import { Navbar, Featured, Sidebar, RightSidebar,Connection,CreatePost } from "@/components";
import CreateUser from "../register/CreateUser";

export default function UserInfoLayout({ children }) {
  const [isClicked, setClicked] = useState(false);
  const [isRegister, setRegister] = useState(true);
  return (
    <>
    <div>
      {isRegister ? <CreateUser /> : 
  
     <div className={`w-full h-full flex bg-[#1D1F26] justify-between  ${isClicked==1 || isClicked==2 ? 'bg-[#212121]  opacity-80' : ''}`}>

        <div className="w-[24%] bg-[#1D1F26] ">
          <Sidebar setClicked={setClicked} />
        </div>
        <div className="w-[55%] h-full flex flex-col justify-center items-center  align-middle">
          {isClicked == 1?<CreatePost setClicked={setClicked}/>:null}
           <Featured setClicked={setClicked} /> 
          {/* <Profile  setClicked={setClicked} /> */}
        {  /* <Connection/> */}
           
        </div>

        <div className="w-[30%] bg-[#1D1F26] mr-4 0">
          <div className="fixed w-[30%] right-2">
          <RightSidebar />
        </div>  </div>
      </div>
      }
      </div>
    </>
  );
}
