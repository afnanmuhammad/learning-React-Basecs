import { useReducer } from "react"
import React from 'react'
import reducer from '../ReducerFunction'

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    console.log("value of Reducer", state)

    return (
        <div>
            <h3>count:{state.count}</h3>
            <h2>UseReducer React Hook</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default UseReducer