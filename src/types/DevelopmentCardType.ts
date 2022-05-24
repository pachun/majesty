type NumberOfResourcesRequiredToBuyDevelopmentCard =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7

type DevelopmentCardPrestigePoints = 0 | 1 | 2 | 3 | 4 | 5

type BonusType = "Diamond" | "Sapphire" | "Emerald" | "Ruby" | "Onyx"

export interface DevelopmentCardType {
  prestigePoints: DevelopmentCardPrestigePoints
  bonus: BonusType
  numberOfDiamondsRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfSapphiresRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfEmeraldsRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfRubiesRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfOnyxesRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
}
