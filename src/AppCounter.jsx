import { useEffect, useState } from "react"

export function AppCounter() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const increaseSeconds = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(increaseSeconds); 
    }, []);


    return (
        <>
            <h1>{seconds}</h1>
            <button></button>
        </>
    )
}