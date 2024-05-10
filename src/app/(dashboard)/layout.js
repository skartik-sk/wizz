"use client";
import "./dashboard_layout.css";
import { Navbar, Featured, Sidebar } from "@/components";

export default function UserInfoLayout({ children }) {
  return (
    <>
      <div className="layout_container">
        <div className="layout_header">
          <Navbar />
        </div>
        <div className="layout_base">
          <div className="layout_sidebar">
            <Sidebar />
          </div>
          <div className="main_content_container">{children}</div>
          <div className="layout_featured">
            <Featured />
          </div>
        </div>
      </div>
    </>
  );
}
