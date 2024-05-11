export default function HOC() {
    return (
        <div className="content">
            <h1>hoc - higher order component, функция высшего порядка</h1>
            <div>
                <p>HOC - так же, как и функция в обычном JS, это компонент,который:</p>
                <ul>
                    <li>
                        <span>либо принимает компонент</span>
                    </li>
                    <li>
                        <span>либо возвращает компонент</span>
                    </li>
                    <li>
                        <span>либо (чаще всего) делает то и другое</span>
                    </li>
                </ul>

                <p>помимо компонента может принимать какие-то дополнительные необходимые параметры</p>
            </div>

            <code>
                <pre>

                </pre>
            </code>
        </div>
    )
}
