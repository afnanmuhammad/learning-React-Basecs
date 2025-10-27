import React from 'react'

const Card = ({ props }) => {
    return (
        <div>
            <h2>🧠 What are Props?</h2>
            <p>✅{props.def}</p>
            <p>✅{props.description}</p>
            <h1>💡 {props.title}</h1>
            <p>✅{props.def}</p>

            <p><span style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>🧩 Example</span> {' '} {props.example}</p>


        </div>
    )
}

export default Card