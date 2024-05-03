'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { topics } from "@/shared/topics";
import "./style.css"

type TopicElement = {label: string, link: string}

export default function NavigationComponent() {
    const pathName = usePathname()

    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {topics.map((topic: TopicElement) => (
                    <li key={topic.link} className="nav-list-element">
                        <Link href={topic.link} className={`link${pathName === `/${topic.link}` ? ' link_active' : ''}`}>
                            {topic.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
