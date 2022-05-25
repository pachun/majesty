import { width, marginRight, borderRadius } from "components/DevelopmentCard"
import { NobleType } from "types/NobleType"
import CostCircle from "./CostCircle"

interface NobleProps {
  noble: NobleType
}

const Noble = ({ noble }: NobleProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.costContainer}>
        {noble.requiredDiamondBonuses && (
          <CostCircle costType="Diamond" cost={noble.requiredDiamondBonuses} />
        )}
        {noble.requiredSapphireBonuses && (
          <CostCircle
            costType="Sapphire"
            cost={noble.requiredSapphireBonuses}
          />
        )}
        {noble.requiredEmeraldBonuses && (
          <CostCircle costType="Emerald" cost={noble.requiredEmeraldBonuses} />
        )}
        {noble.requiredRubyBonuses && (
          <CostCircle costType="Ruby" cost={noble.requiredRubyBonuses} />
        )}
        {noble.requiredOnyxBonuses && (
          <CostCircle costType="Onyx" cost={noble.requiredOnyxBonuses} />
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
    backgroundColor: "red",
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
