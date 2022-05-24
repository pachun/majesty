import { DevelopmentCardType } from "majesty/developmentCards"
import CostCircle from "./CostCircle"

interface BottomProps {
  developmentCard: DevelopmentCardType
}

const Bottom = ({ developmentCard }: BottomProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.costContainer}>
        {developmentCard.numberOfOnyxesRequiredToBuy > 0 && (
          <CostCircle
            costType="Onyx"
            cost={developmentCard.numberOfOnyxesRequiredToBuy}
          />
        )}
        {developmentCard.numberOfRubiesRequiredToBuy > 0 && (
          <CostCircle
            costType="Ruby"
            cost={developmentCard.numberOfRubiesRequiredToBuy}
          />
        )}
        {developmentCard.numberOfEmeraldsRequiredToBuy > 0 && (
          <CostCircle
            costType="Emerald"
            cost={developmentCard.numberOfEmeraldsRequiredToBuy}
          />
        )}
        {developmentCard.numberOfSapphiresRequiredToBuy > 0 && (
          <CostCircle
            costType="Sapphire"
            cost={developmentCard.numberOfSapphiresRequiredToBuy}
          />
        )}
        {developmentCard.numberOfDiamondsRequiredToBuy > 0 && (
          <CostCircle
            costType="Diamond"
            cost={developmentCard.numberOfDiamondsRequiredToBuy}
          />
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-end",
    flex: 1,
    padding: 10,
  },
  costContainer: {
    display: "flex",
    flexDirection: "column-reverse" as const,
    justifyContent: "space-between",
    height: 94,
    width: 94,
    flexWrap: "wrap" as const,
  },
}

export default Bottom
