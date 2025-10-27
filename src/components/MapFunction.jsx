import React from 'react'

const MapFunction = () => {
    const tableData = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
    ];

    return (
        <div>
            <h2>map();</h2>

            {/* Add border using inline style */}
            <table
                style={{
                    borderCollapse: 'collapse',
                    width: '50%',
                    margin: '10px 0',
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((curElement) => (
                        <tr key={curElement.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curElement.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curElement.name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{curElement.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MapFunction;
