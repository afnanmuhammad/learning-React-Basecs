import React, { useContext } from "react";
import { MyContext } from './hooks/ContextApi'

const ChildComponent = () => {
    const data = useContext(MyContext);
    return (
        <div>
            <p>This child component receives data from the Context API </p>
            <h2> {data}</h2>
        </div>
    )
}

export default ChildComponent