import { useState } from "react"

export function Counter({ sum, onClick }) {
    const [num, setAddNum] = useState(0);

    return (
        <div className="counter">
            <h1>{num}/{sum}</h1>
            <button onClick={() => {
                setAddNum((prev) => prev + 1);
                onClick();
            }}>Add</button>
        </div>
    )
}