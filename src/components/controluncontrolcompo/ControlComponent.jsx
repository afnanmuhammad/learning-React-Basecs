import React, { useState } from 'react'

const ControlComponent = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
        console.log("Current input value:", e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${name}`)
        console.log(`The name you entered was: ${name}`);
    }

    return (
        <div>
            <h1>ControlComponent</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default ControlComponent