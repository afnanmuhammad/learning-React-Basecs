import React from "react";
import "./MapFunction.css";
import Card from "./Card";

const MapFunction = () => {
    const tableData = [
        { id: 1, name: "Afnan", age: 22 },
        { id: 2, name: "Talha", age: 23 },
        { id: 3, name: "Kashif", age: 24 },
    ];

    return (
        <div>
            <h2>🧠 Definition: map();</h2>
            <h3>
                The map() function in JavaScript is used to create a new array by
                applying a function to each element of an existing array.
            </h3>

            {/* Add border using inline style */}
            <table
                style={{
                    borderCollapse: "collapse",
                    width: "50%",
                    margin: "10px 0",
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((curElement) => (
                        <tr key={curElement.id}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                {curElement.id}
                            </td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                {curElement.name}
                            </td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>
                                {curElement.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Card
                props={{
                    title: `Props (short for “Properties”) `,
                    description: `Props are read-only. A child component can’t modify the props it receives from its parent component. `,
                    def: `are used to send data from one component (Parent) to another component (Child) in React.
They work just like function parameters.`,

                    example: `const Child = ({ name, age }) => 
  return (
    <div>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </div>
  );
};
`,
                }}
            />
        </div>
    );
};

export default MapFunction;
