import { useMemo } from "react"
import {
  width,
  height,
  borderRadius,
  marginRight,
} from "components/DevelopmentCard"

interface DevelopmentCardDeckProps {
  developmentCardLevel: 1 | 2 | 3
}

const DevelopmentCardDeck = ({
  developmentCardLevel,
}: DevelopmentCardDeckProps) => {
  const deckColor = deckColorsByDevelopmentCardLevel[developmentCardLevel]
  const styles = useMemo(() => stylesFunction(deckColor), [deckColor])

  return (
    <div style={styles.container}>
      <span style={styles.majestyLabel}>Majesty</span>
    </div>
  )
}

const greenDeckColor = "#316226"
const yellowDeckColor = "#8f6911"
const blueDeckColor = "#015a84"

const deckColorsByDevelopmentCardLevel = {
  1: greenDeckColor,
  2: yellowDeckColor,
  3: blueDeckColor,
}

const stylesFunction = (deckColor: string) => ({
  container: {
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
  },
  majestyLabel: {
    color: "#f7c022",
    fontFamily: "Lobster",
    fontSize: 40,
  },
})

export default DevelopmentCardDeck
