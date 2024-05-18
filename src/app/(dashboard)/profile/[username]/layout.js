"use client";
import Link from "next/link";
import "./profile_layout.css";
import Profile from "@/components/profile.js";
import { useParams } from "next/navigation";

export default function ProfileLayout({ children }) {
  const { username } = useParams();
  return (
    <>
      <div className="profile_container">
        <Profile />
        <div className="profile_menu">
          <ul>
            <Link href={`/profile/${username}`}>
              <li>Posts</li>
            </Link>
            <Link href={`/profile/${username}/work`}>
              <li>Work</li>
            </Link>
            <Link href={`/profile/${username}/achievements`}>
              <li>Achivements</li>
            </Link>
          </ul>
        </div>
        <div className="user_posts_content">{children}</div>
      </div>
    </>
  );
}
