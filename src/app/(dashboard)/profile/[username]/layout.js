"use client";
import Link from "next/link";
import "./profile_layout.css";

export default function ProfileLayout({ children }) {
  return (
    <>
      <div className="profile_container">
        <div className="main_profile_section">
          <div className="user_profile_banner_img"></div>
          <div className="user_info">
            <h2 className="user_full_name">Sumit Choudhary</h2>
            <h4 className="user_username">@username</h4>
            <p className="user_bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quae.dolor sit amet consectetur adipisicing elit. Nemo,
            </p>
            <div className="user_followers">
              <Link href="/profile/coolsem/followers">
                <p>Followers: 200</p>
              </Link>
              <Link href="/profile/coolsem/following">
                <p>Following: 200</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile_menu">
          <ul>
            <li>Posts</li>
            <li>Certificates</li>
            <li>Achivements</li>
          </ul>
        </div>
        <div className="user_posts_content">{children}</div>
      </div>
    </>
  );
}
