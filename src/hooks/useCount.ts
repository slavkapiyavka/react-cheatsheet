import {useCallback, useState} from "react";

interface useCountInterface {
    count: number,
    decrement: () => void,
    increment: () => void,
}

export function useCount(initialValue: number = 0): useCountInterface {
    let [count, setCount] = useState(initialValue)

    const decrement = useCallback((): void => { setCount((v: number) => --v) }, [])
    const increment = useCallback((): void => { setCount((v: number) => ++v) }, [])

    return { count, decrement, increment }
}
