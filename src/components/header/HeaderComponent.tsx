import Link from "next/link";
import "./style.css";

export default function HeaderComponent() {
    const pageTitle = 'pageTitle'

    return (
        <header className="main-header">
            <Link href={'/'}>на главную</Link>

            <h1>{ pageTitle }</h1>
        </header>
    )
}
