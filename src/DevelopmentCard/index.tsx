import { DevelopmentCardType } from "./../majesty/developmentCards"
import Top from "./Top"
import Bottom from "./Bottom"

interface DevelopmentCardProps {
  developmentCard: DevelopmentCardType
}

const DevelopmentCard = ({ developmentCard }: DevelopmentCardProps) => {
  return (
    <div style={styles.container}>
      <Top developmentCard={developmentCard} />
      <Bottom developmentCard={developmentCard} />
    </div>
  )
}

export const width = 150
export const height = 175
export const borderRadius = 10
export const marginRight = 30

const styles = {
  container: {
    display: "flex",
    border: "1px solid #000",
    width,
    height,
    borderRadius,
    marginRight,
    flexShrink: 0,
    flexDirection: "column" as const,
    overflow: "hidden",
  },
}

export default DevelopmentCard
