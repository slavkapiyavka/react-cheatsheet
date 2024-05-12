import {ReactElement} from "react";

export default function Components(): ReactElement | null {
    return (
        <div className="content">
            <h1>components</h1>
            <p>Компоненты в React - это база UI.</p>
            <p>Компонент - "строительный блок" любого react приложения.</p>
            <p>Компонент - это ReactElementDOM. Важно понимать что это не DOM Element, а JS объект, который обрабатывается React'ом и уже React в свою очередь "говорит" браузеру что нужно нарисовать.</p>
        </div>
    )
}
