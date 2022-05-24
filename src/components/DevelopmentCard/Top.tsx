import { DevelopmentCardType } from "types/DevelopmentCardType"
import Bonus from "./Bonus"

interface TopProps {
  developmentCard: DevelopmentCardType
}

const Top = ({ developmentCard }: TopProps) => {
  const prestigePointsLabel =
    developmentCard.prestigePoints > 0
      ? developmentCard.prestigePoints.toString()
      : ""

  return (
    <div style={styles.container}>
      <div style={styles.prestigePointsContainer}>
        <span style={styles.prestigePoints}>{prestigePointsLabel}</span>
      </div>
      <div style={styles.middleSpacer} />
      <div style={styles.bonusContainer}>
        <Bonus developmentCard={developmentCard} size={40} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as const,
    height: 60,
    borderBottom: "1px solid #000",
  },
  prestigePointsContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  prestigePoints: {
    fontFamily: "Lobster",
    fontSize: 48,
  },
  middleSpacer: {
    flex: 1,
  },
  bonusContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

export default Top
