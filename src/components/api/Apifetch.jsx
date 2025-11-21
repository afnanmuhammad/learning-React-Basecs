import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/quotes`)
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData.quotes))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            <h1>API fething with useEffect</h1>
            <p>Use dummy data API</p>
            <ul>

                {data.map((curValue) => (
                    <li key={curValue.id}>
                        <h3>{curValue.quote}</h3>
                        <p>{curValue.author}</p></li>))}
            </ul>

        </div>
    )
}

export default Apifetch