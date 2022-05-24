import { useMemo } from "react"
import { BonusType } from "majesty/developmentCards"

interface BonusProps {
  bonus: BonusType
  size: number
}

const Bonus = ({ bonus, size }: BonusProps) => {
  const styles = useMemo(() => stylesFunction(size), [size])

  return <img alt={bonus} style={styles.bonus} src={`/${bonus}.png`} />
}

const stylesFunction = (size: number) => ({
  bonus: {
    maxWidth: size,
    maxHeight: size,
    filter: "drop-shadow(2px 2px 1px #000)",
  },
})

export default Bonus
