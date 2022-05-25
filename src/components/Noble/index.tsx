import { width, marginRight, borderRadius } from "components/DevelopmentCard"
import { NobleType } from "types/NobleType"
import BonusRequirement from "./BonusRequirement"

interface NobleProps {
  noble: NobleType
}

const Noble = ({ noble }: NobleProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.costContainer}>
        {noble.requiredDiamondBonuses && (
          <BonusRequirement
            bonus="Diamond"
            amount={noble.requiredDiamondBonuses}
          />
        )}
        {noble.requiredSapphireBonuses && (
          <BonusRequirement
            bonus="Sapphire"
            amount={noble.requiredSapphireBonuses}
          />
        )}
        {noble.requiredEmeraldBonuses && (
          <BonusRequirement
            bonus="Emerald"
            amount={noble.requiredEmeraldBonuses}
          />
        )}
        {noble.requiredRubyBonuses && (
          <BonusRequirement bonus="Ruby" amount={noble.requiredRubyBonuses} />
        )}
        {noble.requiredOnyxBonuses && (
          <BonusRequirement bonus="Onyx" amount={noble.requiredOnyxBonuses} />
        )}
      </div>
      <div style={styles.centerSpacer} />
      <div style={styles.prestigePointsContainer}>
        <span style={styles.prestigePoints}>3</span>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: width - 20,
    marginRight,
    height: width - 20,
    borderRadius,
    border: "1px solid #000",
    padding: 10,
    display: "flex",
  },
  costContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column" as const,
  },
  centerSpacer: {
    flex: 1,
  },
  prestigePointsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-end",
  },
  prestigePoints: {
    fontFamily: "Lobster",
    fontSize: 48,
    textAlign: "right" as const,
  },
}

export default Noble
