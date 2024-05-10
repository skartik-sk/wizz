"use client";
import "./dashboard_layout.css";

export default function UserInfoLayout({ children }) {
  return <>
  <div className="layout_container">
    <div className="layout_header">
      
    </div>
    <div className="layout_base">
      <div className="layout_sidebar">

      </div>
      <div className="main_content_container">
      {children}
      </div>
      <div className="layout_right_container">

      </div>
    </div>
  </div>
   
   </>;
}
