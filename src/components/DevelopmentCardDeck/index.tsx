import { width, height, borderRadius, marginRight } from "./DevelopmentCard"

interface DevelopmentCardDeckProps {
  developmentCardLevel: 1 | 2 | 3
}

const DevelopmentCardDeck = ({
  developmentCardLevel,
}: DevelopmentCardDeckProps) => {
  const deckColorsByDevelopmentCardLevel = {
    1: "#316226",
    2: "#8f6911",
    3: "#015a84",
  }
  const deckColor = deckColorsByDevelopmentCardLevel[developmentCardLevel]

  return (
    <div
      style={{
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
        borderRadius,
        marginRight,
        backgroundColor: deckColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#f7c022", fontFamily: "Lobster", fontSize: 40 }}>
        Majesty
      </span>
    </div>
  )
}

export default DevelopmentCardDeck
