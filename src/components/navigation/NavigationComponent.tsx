"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics, Topic } from "@/shared/topics";
import "./style.css";

export default function NavigationComponent() {
  const pathName = usePathname();

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {topics.map((topic: Topic) => (
          <li
            key={topic.link}
            className="nav-list-element"
            inert={!topic.isAvailable}
          >
            <Link
              href={topic.link}
              className={`link${pathName === `/${topic.link}` ? " link_active" : ""}`}
            >
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
