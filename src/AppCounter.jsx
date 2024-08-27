import { Counter } from "./components/Counter";
import { useState } from "react"

export function AppCounter() {
    const [sum, setSum] = useState(0);
    const getSum = () => {
        setSum((prev) => prev + 1);
    };

    return (
        <>
            <h1>총 {sum} 입니다  {sum > 10 ? '❤️':'🤍'}</h1>
            <Counter sum={sum} onClick={getSum}/>
            <Counter sum={sum} onClick={getSum}/>
        </>
    )
}