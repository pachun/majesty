import { useMemo } from "react"

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
  const styles = useMemo(() => {
    const backgroundColor = {
      Diamond: "#ffffff",
      Sapphire: "#1abaf6",
      Emerald: "#7ad800",
      Ruby: "#ef4141",
      Onyx: "#5a6d78",
    }[costType]
    return stylesFunction(backgroundColor)
  }, [costType])

  return (
    <div style={styles.container}>
      <span style={styles.costLabel}>{cost}</span>
    </div>
  )
}

const stylesFunction = (backgroundColor: string) => ({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    background: `radial-gradient(#fff, ${backgroundColor})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000",
  },
  costLabel: {
    fontFamily: "Lobster",
    fontSize: 26,
  },
})

export default CostCircle
