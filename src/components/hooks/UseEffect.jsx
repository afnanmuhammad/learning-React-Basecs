import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [date, setDate] = useState();
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("UseEffect Called", count);

        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    }, [count])
    return (
        <div>
            <h1>UseEffect</h1>
            <p>Date: {date}</p>

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>ADD</button>
        </div>
    )
}

export default UseEffect