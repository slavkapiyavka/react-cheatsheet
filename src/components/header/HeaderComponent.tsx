'use client'

import Link from "next/link";
import "./style.css";
import {topics} from "@/shared/topics";
import {usePathname} from "next/navigation";

export default function HeaderComponent() {
    const pathname = usePathname()
    const pageTitle: any = topics.find((topic) => topic.link === pathname.replace('/', ''))

    return (
        <header className="main-header">
            <Link href={'/'}>на главную</Link>

            <h1 className="main-header__title overflow-ellipsis">{ pageTitle ? pageTitle.label : 'Шпора' }</h1>
        </header>
    )
}
