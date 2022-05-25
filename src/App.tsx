import ReactJson from "react-json-view"
import nobles from "majesty/nobles"
import {
  levelOneDevelopmentCards,
  levelTwoDevelopmentCards,
  levelThreeDevelopmentCards,
} from "majesty/developmentCards"
import DevelopmentCard, {
  width,
  marginRight,
  borderRadius,
} from "components/DevelopmentCard"
import DevelopmentCardDeck from "components/DevelopmentCardDeck"
import shuffle from "helpers/shuffle"

const stuff = {
  levelOneDevelopmentCards: shuffle(levelOneDevelopmentCards),
  levelTwoDevelopmentCards: shuffle(levelTwoDevelopmentCards),
  levelThreeDevelopmentCards: shuffle(levelThreeDevelopmentCards),
  nobles: shuffle(Array.from(nobles)).slice(0, 5),
}

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", overflowX: "auto" }}>
        {stuff.nobles.map((noble, position) => (
          <div
            key={position}
            style={{
              width: width - 20,
              marginRight,
              height: width - 20,
              borderRadius,
              border: "1px solid #000",
              padding: 10,
            }}
          >
            {noble.name}
          </div>
        ))}
      </div>
      <div style={{ height: 10 }} />
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
