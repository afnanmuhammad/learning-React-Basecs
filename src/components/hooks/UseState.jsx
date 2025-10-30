import React from 'react'

const UseState = () => {
    const [state, setSate] = React.useState(null);
    return (
        <div>
            <h2>🟢 State: </h2>
            <p>it is store data or information it can change over time in React Component.</p>
            <h2>🟣 useState():</h2>
            <p>useState is a react hook that create and update the state. </p>
            <p>😊 when state change automatically update screen or web page</p>
            <h3>🔵 Syntax:</h3>
            <pre>
                const [state, setState] = React.useState(initialState);
            </pre>

            <h3>🟠 Example:</h3>
            <h1>Value: {state}</h1>
            <button onClick={() => setSate(state + 1)}>Add</button>
            <button onClick={() => setSate(0)}>Reset</button>

        </div>
    )
}

export default UseState