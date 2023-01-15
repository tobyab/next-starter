import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex space-x-4">
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}