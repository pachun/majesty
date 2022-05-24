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

const CostCircle = ({ costType, cost }: DevelopmentCardCostCircleProps) => {
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

export default CostCircle
