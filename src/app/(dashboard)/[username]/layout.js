"use client";
import Link from "next/link";
import MiniProfile from "@/components/miniProfile";

export default function ProfileLayout({ children }) {
  return (
    <div className="connection_container">
      <div className="mini_profile_container">
        <MiniProfile />
      </div>
      <div className="connection_menu">
        <ul>
          <Link href="/wizz/followers">
            <li>Followers</li>
          </Link>
          <Link href="/wizz/following">
            <li>Following</li>
          </Link>
          <Link href="/wizz/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
      <div className="connection_content">{children}</div>
    </div>
  );
}
