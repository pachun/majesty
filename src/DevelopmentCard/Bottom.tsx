import { DevelopmentCardType } from "./../majesty/developmentCards"

type DevelopmentCardCostType =
  | "Diamond"
  | "Sapphire"
  | "Emerald"
  | "Ruby"
  | "Onyx"

interface DevelopmentCardCostCircleProps {
  costType: DevelopmentCardCostType
  cost: number
}

const DevelopmentCardCostCircle = ({
  costType,
  cost,
}: DevelopmentCardCostCircleProps) => {
  const backgroundColor = {
    Diamond: "#ffffff",
    Sapphire: "#1abaf6",
    Emerald: "#7ad800",
    Ruby: "#ef4141",
    Onyx: "#5a6d78",
  }[costType]

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        background: `radial-gradient(#fff, ${backgroundColor})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #000",
      }}
    >
      <span
        style={{
          fontFamily: "Lobster",
          fontSize: 26,
        }}
      >
        {cost}
      </span>
    </div>
  )
}

interface BottomProps {
  developmentCard: DevelopmentCardType
}

const Bottom = ({ developmentCard }: BottomProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: 1,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
          height: 94,
          width: 94,
          flexWrap: "wrap",
        }}
      >
        {developmentCard.numberOfOnyxesRequiredToBuy > 0 && (
          <DevelopmentCardCostCircle
            costType="Onyx"
            cost={developmentCard.numberOfOnyxesRequiredToBuy}
          />
        )}
        {developmentCard.numberOfRubiesRequiredToBuy > 0 && (
          <DevelopmentCardCostCircle
            costType="Ruby"
            cost={developmentCard.numberOfRubiesRequiredToBuy}
          />
        )}
        {developmentCard.numberOfEmeraldsRequiredToBuy > 0 && (
          <DevelopmentCardCostCircle
            costType="Emerald"
            cost={developmentCard.numberOfEmeraldsRequiredToBuy}
          />
        )}
        {developmentCard.numberOfSapphiresRequiredToBuy > 0 && (
          <DevelopmentCardCostCircle
            costType="Sapphire"
            cost={developmentCard.numberOfSapphiresRequiredToBuy}
          />
        )}
        {developmentCard.numberOfDiamondsRequiredToBuy > 0 && (
          <DevelopmentCardCostCircle
            costType="Diamond"
            cost={developmentCard.numberOfDiamondsRequiredToBuy}
          />
        )}
      </div>
    </div>
  )
}

export default Bottom