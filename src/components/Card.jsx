import React from 'react'

const Card = ({ props }) => {
    //💡 3 method destructuring  const Card = ({title, description, def, example}) => {

    const { title, description, def, example } = props; // store in variable destructuring
    return (
        <div>
            {/* <h2>🧠 What are Props?</h2>
            <p>✅{props.def}</p>
            <p>✅{props.description}</p>
            <h1>💡 {props.title}</h1>
            <p>✅{props.def}</p>
            <p><span style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
            🧩 Example</span> {' '} {props.example}</p> */}


            {/* 💡 2 method  store in variable direct use props*/}
            <p>✅{def}</p>
            <p>✅{description}</p>
            <h1>💡 {title}</h1>
            <p>✅{def}</p>
            <p><span style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>🧩 Example</span> {' '} {example}</p>


        </div>
    )
}



export default Card