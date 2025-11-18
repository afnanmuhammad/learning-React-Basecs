import React from 'react'
import { useState } from 'react'

const ShortsCir = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>✔ Short Circuit Operators ******* "||", "&&", "??"  ********</h1>
            <p>🟢 1. AND Operator (&&) <br />
                👉 Meaning:

                If left side is true → show right side
                If left side is false → nothing happens.</p>
            <pre>⚡Easy example: isLoggedIn && "Welcome User" <br />
                ✔ If isLoggedIn is true, shows "Welcome User".<br />
                ✔ If isLoggedIn is false, shows nothing.
            </pre>
            <p>**********************</p>
            <p>🔴 2. OR Operator (||) <br />
                👉 Meaning:

                If left side is false → show right side
                If left side is true → show left side.</p>
            <pre>⚡Easy example:{user || "No User Found"}</pre>
            <p>If name = "" (empty) → output: "Guest User"<br />
                If name = "Afnan" → output: "Afnan"</p>
            <p>************************</p>
            <p>🔵 3. Nullish Coalescing (??) <br />
                👉 Meaning:

                Use right side only when left is null OR undefined
                (Unlike ||, it does NOT treat 0, "", false as empty)</p>
            <pre>If age = undefined → 18 <br />

                If age = null → 18 <br />

                If age = 0 → 0 ✔ <br />

                If age = "" → "" ✔</pre>
            <pre>⚡Easy example:{`userAge ?? Age not given`}</pre>

            {isLoggedIn && <p>User Login </p>}
            {user ? `Welcome ${user}` : "plz Login"}
            {/* Buttons */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            <button onClick={() => setUser("Afnan Bangash")}>Set User </button>
            <button onClick={() => setUser("")}>Clear User </button>
            <hr />
        </div>
    )
}

export default ShortsCir