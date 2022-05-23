import { DevelopmentCardType } from "./../majesty/developmentCards"
import Bonus from "./../Bonus"

interface TopProps {
  developmentCard: DevelopmentCardType
}

const Top = ({ developmentCard }: TopProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 60,
        borderBottom: "1px solid #000",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Lobster",
            fontSize: 48,
          }}
        >
          {developmentCard.prestigePoints > 0
            ? developmentCard.prestigePoints
            : ""}
        </span>
      </div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Bonus bonus={developmentCard.bonus} size={40} />
      </div>
    </div>
  )
}

export default Top
