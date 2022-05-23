import { BonusType } from "./majesty/developmentCards"

interface BonusProps {
  bonus: BonusType
  size: number
}

const Bonus = ({ bonus, size }: BonusProps) => {
  return (
    <img
      alt={bonus}
      src={`/${bonus}.png`}
      style={{
        maxWidth: size,
        maxHeight: size,
        filter: "drop-shadow(2px 2px 1px #000)",
      }}
    />
  )
}

export default Bonus
