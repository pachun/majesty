import React from "react"
import ReactJson from "react-json-view"
import nobles from "./majesty/nobles"
import developmentCards from "./majesty/developmentCards"
import DevelopmentCard from "./DevelopmentCard"

const stuff = {
  ...developmentCards,
  nobles: Array.from(nobles),
}

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        {stuff.levelThreeDevelopmentCards.map(levelThreeDevelopmentCard => (
          <DevelopmentCard developmentCard={levelThreeDevelopmentCard} />
        ))}
      </div>
      <ReactJson src={stuff} />
    </div>
  )
}

export default App
