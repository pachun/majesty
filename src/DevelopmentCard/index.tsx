import { DevelopmentCardType } from "./../majesty/developmentCards"
import Top from "./Top"

interface DevelopmentCardProps {
  developmentCard: DevelopmentCardType
}

const DevelopmentCard = ({ developmentCard }: DevelopmentCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        width: 200,
        height: 225,
        flexShrink: 0,
        borderRadius: 10,
        marginRight: 30,
      }}
    >
      <Top developmentCard={developmentCard} />
      {developmentCard.numberOfDiamondsRequiredToBuy > 0 && (
        <div>
          Diamonds Needed: {developmentCard.numberOfDiamondsRequiredToBuy}
        </div>
      )}
      {developmentCard.numberOfSapphiresRequiredToBuy > 0 && (
        <div>
          Sapphires Needed: {developmentCard.numberOfSapphiresRequiredToBuy}
        </div>
      )}
      {developmentCard.numberOfEmeraldsRequiredToBuy > 0 && (
        <div>
          Emeralds Needed: {developmentCard.numberOfEmeraldsRequiredToBuy}
        </div>
      )}
      {developmentCard.numberOfRubiesRequiredToBuy > 0 && (
        <div>Rubies Needed: {developmentCard.numberOfRubiesRequiredToBuy}</div>
      )}
      {developmentCard.numberOfOnyxesRequiredToBuy > 0 && (
        <div>Onyxes Needed: {developmentCard.numberOfOnyxesRequiredToBuy}</div>
      )}
    </div>
  )
}

export default DevelopmentCard
