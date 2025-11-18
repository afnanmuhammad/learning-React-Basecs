import React from 'react'

const UnControlComponent = () => {
    const nameInput = React.useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${nameInput.current.value}`);
        console.log("Current input value:", nameInput.current.value);
    }

    return (
        <div>
            <h1>UnControlComponent</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={nameInput} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UnControlComponent