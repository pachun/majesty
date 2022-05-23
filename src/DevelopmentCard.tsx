import { DevelopmentCardType } from "./majesty/developmentCards"

interface DevelopmentCardProps {
  developmentCard: DevelopmentCardType
}

const DevelopmentCard = ({ developmentCard }: DevelopmentCardProps) => {
  return (
    <div style={{ border: "1px solid #000", width: 200, flexShrink: 0 }}>
      <div>Prestige Points: {developmentCard.prestigePoints}</div>
      <div>Bonus: {developmentCard.bonus}</div>
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
