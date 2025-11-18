import React from 'react'

const UseState = () => {
    const [state, setState] = React.useState(0);
    const [steps, setSteps] = React.useState(0);

    const handleIncrement = () => {
        setState(state + steps);
    };

    const handleDecrement = () => {
        setState(state - steps);
    };

    return (
        <div>
            <h2>🟢 State: </h2>
            <p>It stores data that can change over time in a React component.</p>

            <h2>🟣 useState():</h2>
            <p>useState is a React hook used to create and update state.</p>
            <p>😊 When state changes, the UI automatically updates.</p>

            <h3>🔵 Syntax:</h3>
            <pre>
                const [state, setState] = React.useState(initialState);
            </pre>

            <h3>🟠 Example:</h3>
            <h1>Value: {state}</h1>

            <label>
                Steps:
                <input
                    type="number"
                    value={steps}
                    onChange={(e) => setSteps(Number(e.target.value))}
                />
            </label>

            <br /><br />

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => setState(0)}>Reset</button>

            <hr></hr>
        </div>
    );
}

export default UseState
