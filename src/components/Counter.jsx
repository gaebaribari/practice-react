import { useState } from "react"

export function Counter({ sum, onClick }) {
    const [num, setAddNum] = useState(0);

    return (
        <div className="counter">
            <h1>시간</h1>
        </div>
    )
}