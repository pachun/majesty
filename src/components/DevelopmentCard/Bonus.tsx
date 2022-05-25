import { useMemo } from "react"
import { BonusType } from "types/BonusType"

interface BonusProps {
  bonusType: BonusType
  size: number
}

const Bonus = ({ bonusType, size }: BonusProps) => {
  const styles = useMemo(() => stylesFunction(size), [size])
  const imageSource = `/${bonusType}.png`

  return <img alt={bonusType} style={styles.bonus} src={imageSource} />
}

const stylesFunction = (size: number) => ({
  bonus: {
    maxWidth: size,
    maxHeight: size,
    filter: "drop-shadow(2px 2px 1px #000)",
  },
})

export default Bonus
