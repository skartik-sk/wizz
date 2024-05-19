"use client";
import Profile from "@/components/profile";
import "./dashboard_layout.css";
import { Navbar, Featured, Sidebar, RightSidebar } from "@/components";

export default function UserInfoLayout({ children }) {
  return (
    <>
      <div className=" w-full h-full flex bg-[#1D1F26] justify-between">
        <div className="w-[24%] bg-[#1D1F26] border-r-[#393C49] border-r-4 ">
          <Sidebar />
        </div>
        <div className="w-[55%] flex flex-col justify-center items-center  align-middle">
          {/* <Featured /> */}
          <Profile />
        </div>

        <div className="w-[30%] bg-[#1D1F26] mr-4 0">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
