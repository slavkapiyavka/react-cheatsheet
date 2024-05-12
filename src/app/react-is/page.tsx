import {Metadata} from "next";
import {ReactElement} from "react";

export function generateMetadata(): Metadata {
    return {
        title: 'react - это... | Шпора'
    }
}

export default function ReactIs(): ReactElement | null {
    return (
        <>
            <h1>react - это...</h1>
            <p>библиотека JavaScript для создания UI, пользовательских интерфейсов, разработанная командой Facebook, и она уже давно завоевала популярность среди разработчиков по всему миру.</p>

            <p>преимущества</p>
            <ul>
                <li>
                    <p>Очень просто сделать небольшое приложение. Если ты знаешь JS - тебе не составит труда писать на React.</p>
                    <p></p>
                </li>
                <li>
                    <p>Декларативность</p>
                </li>
                <li>
                    <p>Компонентный подход</p>
                </li>
                <li>
                    <p>Популярность и стабильность</p>
                </li>
            </ul>

            <h2>Next.js</h2>
            <p>это уже фреймворк, построенный на базе react. Внутри за UI по прежнему отвечает React, помимо него ещё добавлен роутинг, SSR, SSG и прочее</p>
        </>
    )
}
