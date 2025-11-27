import React from 'react'
import { useCounter } from './CoustomHook';

const CounterCoustomHook = () => {
    const { count, inrement, decrement, reset } = useCounter();
    console.log("count:", count);
    return (
        <div>
            <h2>CounterCoustomHook</h2>
            <p>count:{count}</p>
            <button onClick={inrement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterCoustomHook