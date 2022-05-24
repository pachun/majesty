import ReactJson from "react-json-view"
import nobles from "majesty/nobles"
import {
  levelOneDevelopmentCards,
  levelTwoDevelopmentCards,
  levelThreeDevelopmentCards,
} from "majesty/developmentCards"
import DevelopmentCard from "components/DevelopmentCard"
import DevelopmentCardDeck from "components/DevelopmentCardDeck"

const stuff = {
  levelOneDevelopmentCards,
  levelTwoDevelopmentCards,
  levelThreeDevelopmentCards,
  nobles: Array.from(nobles),
}

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck developmentCardLevel={3} />
        {stuff.levelThreeDevelopmentCards
          .slice(0, 4)
          .map((levelThreeDevelopmentCard, position) => (
            <DevelopmentCard
              key={position}
              developmentCard={levelThreeDevelopmentCard}
            />
          ))}
      </div>
      <div style={{ height: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck developmentCardLevel={2} />
        {stuff.levelTwoDevelopmentCards
          .slice(0, 4)
          .map((levelTwoDevelopmentCard, position) => (
            <DevelopmentCard
              key={position}
              developmentCard={levelTwoDevelopmentCard}
            />
          ))}
      </div>
      <div style={{ height: 10 }} />
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        <DevelopmentCardDeck developmentCardLevel={1} />
        {stuff.levelOneDevelopmentCards
          .slice(0, 4)
          .map((levelOneDevelopmentCard, position) => (
            <DevelopmentCard
              key={position}
              developmentCard={levelOneDevelopmentCard}
            />
          ))}
      </div>
      <ReactJson src={stuff} />
    </div>
  )
}

export default App
