import React, { Component } from "react";

class Welcome extends Component {
    state = {
        message: "⚛️ Class Component in React",
        title: "🧩 What is it?",
        definition: `A class component in React is made using the class keyword.\nIt can hold state, props, and lifecycle methods.\nBefore React Hooks were added, class components were the main way to make dynamic components.`,
        keyPoint: "📝 Easy Explanation:",
        define: `• class Welcome extends Component → creates a class component.\n• render() → must return HTML (JSX).\n• state → stores data.\n• props → gets data from parent component.\n• You need to use 'this' keyword a lot.\n👉 Class components are now old style — we use them less today.`,
    };

    render() {
        return (
            <div style={{ whiteSpace: "pre-line" }}>
                <h1>{this.state.message}</h1>
                <h2>{this.state.title}</h2>
                <p>{this.state.definition}</p>
                <h2>{this.state.keyPoint}</h2>
                <p>{this.state.define}</p>
                <hr />
            </div>
        );
    }
}

export default Welcome;
