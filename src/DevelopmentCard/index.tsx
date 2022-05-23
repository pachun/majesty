import { DevelopmentCardType } from "./../majesty/developmentCards"
import Top from "./Top"
import Bottom from "./Bottom"

interface DevelopmentCardProps {
  developmentCard: DevelopmentCardType
}

const DevelopmentCard = ({ developmentCard }: DevelopmentCardProps) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #000",
        width: 200,
        height: 225,
        flexShrink: 0,
        borderRadius: 10,
        marginRight: 30,
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Top developmentCard={developmentCard} />
      <Bottom developmentCard={developmentCard} />
    </div>
  )
}

export default DevelopmentCard
