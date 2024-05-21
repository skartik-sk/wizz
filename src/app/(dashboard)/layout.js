"use client";
import Profile from "@/components/profile";
import { useState } from "react";
import "./dashboard_layout.css";
import {
  Navbar,
  Featured,
  Sidebar,
  RightSidebar,
  Connection,
  CreatePost,
} from "@/components";
import CreateUser from "../register/CreateUser";

export default function UserInfoLayout({ children }) {
  const [isClicked, setClicked] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isSidebar, setSidebar] = useState(false);
  return (
    <>
      <div>
        {isRegister ? (
          <CreateUser />
        ) : (
          <div
            className={`w-full h-full flex bg-[#1D1F26] lg:justify-between pt-4 md:pt-0   ${
              isClicked == 1 || isClicked == 2 ? "bg-[#212121]  opacity-80" : ""
            }`}
          >
            {!isSidebar ? (
              <div className="md:hidden absolute left-4 top-4 ">
                <button
                 
                  onClick={() => setSidebar(true)}
                >
                  <svg 
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.625 0H25.375V2.75H0.625V0ZM0.625 9.625H17.125V12.375H0.625V9.625ZM0.625 19.25H25.375V22H0.625V19.25Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            ) : null}

            <div className="lg:w-[24%] md:w-[35%] hidden  md:block bg-[#1D1F26] ">
              <Sidebar setClicked={setClicked} />
            </div>
            <div className="lg:w-[55%] md:w-[65%] w-full  h-full flex flex-col justify-center items-center  align-middle">
              {isClicked == 1 ? <CreatePost setClicked={setClicked} /> : null}

              {isSidebar ? (
                <div className=" block md:hidden w-full">
                  {" "}
                  <Sidebar
                    setClicked={setClicked}
                    setSidebar={setSidebar}
                    isSidebar={isSidebar}
                  />{" "}
                </div>
              ) : null}
              {children}
            </div>

            <div className="w-[30%] lg:flex hidden bg-[#1D1F26] mr-4 0">
              <div className="fixed w-[30%] right-2">
                <RightSidebar />
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
