import { useMemo } from "react"
import { BonusType } from "types/BonusType"

interface BonusRequirementProps {
  bonus: BonusType
  amount: number
}

const BonusRequirement = ({ bonus, amount }: BonusRequirementProps) => {
  const styles = useMemo(() => {
    const backgroundColor = {
      Diamond: "#ffffff",
      Sapphire: "#1abaf6",
      Emerald: "#7ad800",
      Ruby: "#ef4141",
      Onyx: "#5a6d78",
    }[bonus]
    return stylesFunction(backgroundColor)
  }, [bonus])

  return (
    <div style={styles.container}>
      <span style={styles.amountLabel}>{amount}</span>
    </div>
  )
}

const stylesFunction = (backgroundColor: string) => ({
  container: {
    width: 30,
    height: 40,
    borderRadius: 10,
    background: `radial-gradient(#fff, ${backgroundColor})`,
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000",
  },
  amountLabel: {
    fontFamily: "Lobster",
    fontSize: 26,
  },
})

export default BonusRequirement
