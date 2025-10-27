import React from 'react'

const Card = ({ props }) => {
    //const Card = ({ title, description, def, example }) => { ****** destructuring in parameter

    const { title, description, def, example } = props;
    return (
        <div>
            {/*simple props */}
            {/* <h2>🧠 What are Props?</h2>
            <p>✅{props.def}</p>
            <p>✅{props.description}</p>
            <h1>💡 {props.title}</h1>
            <p>✅{props.def}</p>

            <p><span style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>🧩 Example</span> {' '} {props.example}</p>*/}


            {/* destructuring store in variable */}
            <h2>🧠 What are Props?</h2>
            <p>✅{def}</p>
            <p>✅{description}</p>
            <h1>💡 {title}</h1>
            <p>✅{def}</p>

            <p><span style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>🧩 Example</span> {' '} {example}</p>



        </div>
    )
}

export default Card