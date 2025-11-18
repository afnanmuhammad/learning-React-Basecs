import React from "react"
import ClassBaseComponent from "./components/ClassBaseComponent"
import FunctionBaseComponent from "./components/FunctionBaseComponent"
import MapFunction from "./components/MapFunction"
import UseState from "./components/hooks/UseState"
import ShortsCir from "./components/ShortsCir"
import ControlComponent from "./components/controluncontrolcompo/ControlComponent"
import UnControlComponent from "./components/controluncontrolcompo/UnControlComponent"


function App() {


  return (
    <>
      <ClassBaseComponent />
      <FunctionBaseComponent />
      <p>🔍 Why Use Fragments?<br />
        ✅ To avoid unnecessary (div) wrappers (called "div soup") <br />
        ✅ To return multiple elements from a component<br />
        ✅ Keeps HTML structure clean and lightweight<br />
        🧠 In short:<br />
        ✅Fragment is like an invisible wrapper in React — <br />
        ✅it groups elements without adding anything extra to the HTML.
      </p>
      <MapFunction />
      <hr />
      <UseState />
      <ShortsCir />
      <ControlComponent />
      <UnControlComponent />
    </>
  )
}

export default App
