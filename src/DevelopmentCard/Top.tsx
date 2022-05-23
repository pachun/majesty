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
        height: 80,
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
            fontSize: 58,
          }}
        >
          {developmentCard.prestigePoints}
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
        <Bonus bonus={developmentCard.bonus} size={55} />
      </div>
    </div>
  )
}

export default Top
