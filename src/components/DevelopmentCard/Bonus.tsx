import { useMemo } from "react"
import { DevelopmentCardType } from "types/DevelopmentCardType"

interface BonusProps {
  developmentCard: DevelopmentCardType
  size: number
}

const Bonus = ({ developmentCard, size }: BonusProps) => {
  const styles = useMemo(() => stylesFunction(size), [size])
  const imageSource = `/${developmentCard.bonus}.png`

  return (
    <img alt={developmentCard.bonus} style={styles.bonus} src={imageSource} />
  )
}

const stylesFunction = (size: number) => ({
  bonus: {
    maxWidth: size,
    maxHeight: size,
    filter: "drop-shadow(2px 2px 1px #000)",
  },
})

export default Bonus
