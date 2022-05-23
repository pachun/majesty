import React from "react"
import ReactJson from "react-json-view"
import nobles from "./majesty/nobles"
import developmentCards from "./majesty/developmentCards"
import DevelopmentCard from "./DevelopmentCard"
import DevelopmentCardDeck from "./DevelopmentCardDeck"

const stuff = {
  ...developmentCards,
  nobles: Array.from(nobles),
}

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck
          developmentCards={stuff.levelThreeDevelopmentCards}
          developmentCardLevel={3}
        />
        {stuff.levelThreeDevelopmentCards
          .slice(0, 4)
          .map(levelThreeDevelopmentCard => (
            <DevelopmentCard developmentCard={levelThreeDevelopmentCard} />
          ))}
      </div>
      <div style={{ height: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck
          developmentCards={stuff.levelTwoDevelopmentCards}
          developmentCardLevel={2}
        />
        {stuff.levelTwoDevelopmentCards
          .slice(0, 4)
          .map(levelTwoDevelopmentCard => (
            <DevelopmentCard developmentCard={levelTwoDevelopmentCard} />
          ))}
      </div>
      <div style={{ height: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck
          developmentCards={stuff.levelOneDevelopmentCards}
          developmentCardLevel={1}
        />
        {stuff.levelOneDevelopmentCards
          .slice(0, 4)
          .map(levelOneDevelopmentCard => (
            <DevelopmentCard developmentCard={levelOneDevelopmentCard} />
          ))}
      </div>
      <ReactJson src={stuff} />
    </div>
  )
}

export default App
