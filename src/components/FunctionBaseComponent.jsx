import React from "react";

const FunctionBaseComponent = () => {
    return (
        <div>
            <h1>⚡ Function Component in React</h1>
            <h2>🧩 What is it?</h2>
            <p>
                A function component is a simple JavaScript function that returns JSX
                (HTML-like code). <br />
                It can use Hooks like useState and useEffect to manage state and logic. <br />
                It’s the modern and easier way to build components.
            </p>

            <h1>📝 Easy Explanation:</h1>
            <p>
                • Made with function keyword.
                <br />
                • Returns JSX directly (no render() needed).
                <br />
                • Uses Hooks for state and lifecycle (no need for this).
                <br />
                • Short, clean, and fast.
                <br />
                • Most used in modern React apps.
            </p>

            <hr />
        </div>
    );
};

export default FunctionBaseComponent;
