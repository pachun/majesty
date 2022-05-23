import React from "react"
import ReactJson from "react-json-view"
import nobles from "./majesty/nobles"
import developmentCards from "./majesty/developmentCards"

const stuff = {
  ...developmentCards,
  nobles: Array.from(nobles),
}

function App() {
  return <ReactJson src={stuff} />
}

export default App
