"use client";
import Link from "next/link";
import MiniProfile from "@/components/miniProfile";
import { useParams } from "next/navigation";

export default function ProfileLayout({ children }) {
    const { username } = useParams();
    
  return (
    <div className="connection_container">
      <div className="mini_profile_container">
        <MiniProfile />
      </div>
      <div className="connection_menu">
        <ul>
          <Link href={`/${username}/followers`}>
            <li>Followers</li>
          </Link>
          <Link href={`/${username}/following`}>
            <li>Following</li>
          </Link>
          <Link href={`/${username}/projects`}>
            <li>Projects</li>
          </Link>
        </ul>
      </div>
      <div className="connection_content">{children}</div>
    </div>
  );
}
