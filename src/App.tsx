import React from "react"
import ReactJson from "react-json-view"

interface IsabellaOfCastille {
  name: "Isabella of Castille"
  requiredDiamondBonuses: 4
  requiredOnyxBonuses: 4
}
const isabellaOfCastille: IsabellaOfCastille = {
  name: "Isabella of Castille",
  requiredDiamondBonuses: 4,
  requiredOnyxBonuses: 4,
}

interface FrancoisTheFirst {
  name: "François 1st"
  requiredOnyxBonuses: 3
  requiredRubyBonuses: 3
  requiredEmeraldBonuses: 3
}
const francoisTheFirst: FrancoisTheFirst = {
  name: "François 1st",
  requiredOnyxBonuses: 3,
  requiredRubyBonuses: 3,
  requiredEmeraldBonuses: 3,
}

interface MaryStuart {
  name: "Mary Stuart"
  requiredOnyxBonuses: 3
  requiredSapphireBonuses: 3
  requiredDiamondBonuses: 3
}
const maryStuart: MaryStuart = {
  name: "Mary Stuart",
  requiredOnyxBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredDiamondBonuses: 3,
}

interface CharlesTheFifth {
  name: "Charles V"
  requiredOnyxBonuses: 3
  requiredRubyBonuses: 3
  requiredDiamondBonuses: 3
}
const charlesTheFifth: CharlesTheFifth = {
  name: "Charles V",
  requiredOnyxBonuses: 3,
  requiredRubyBonuses: 3,
  requiredDiamondBonuses: 3,
}

interface Machiavelli {
  name: "Machiavelli"
  requiredSapphireBonuses: 4
  requiredDiamondBonuses: 4
}
const machiavelli: Machiavelli = {
  name: "Machiavelli",
  requiredSapphireBonuses: 4,
  requiredDiamondBonuses: 4,
}

interface CatherineOfMedici {
  name: "Catherine of Medici"
  requiredEmeraldBonuses: 3
  requiredSapphireBonuses: 3
  requiredRubyBonuses: 3
}
const catherineOfMedici: CatherineOfMedici = {
  name: "Catherine of Medici",
  requiredEmeraldBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredRubyBonuses: 3,
}

interface HenryTheEighth {
  name: "Henry VIII"
  requiredOnyxBonuses: 4
  requiredRubyBonuses: 4
}
const henryTheEighth: HenryTheEighth = {
  name: "Henry VIII",
  requiredOnyxBonuses: 4,
  requiredRubyBonuses: 4,
}

interface AnneOfBrittany {
  name: "Anne of Brittany"
  requiredEmeraldBonuses: 3
  requiredSapphireBonuses: 3
  requiredDiamondBonuses: 3
}
const anneOfBrittany: AnneOfBrittany = {
  name: "Anne of Brittany",
  requiredEmeraldBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredDiamondBonuses: 3,
}

interface SolimanTheMagnificent {
  name: "Soliman the Magnificent"
  requiredSapphireBonuses: 4
  requiredEmeraldBonuses: 4
}
const solimanTheMagnificent: SolimanTheMagnificent = {
  name: "Soliman the Magnificent",
  requiredSapphireBonuses: 4,
  requiredEmeraldBonuses: 4,
}

interface ElizabethTheFirstOfEngland {
  name: "Elizabeth I of England"
  requiredRubyBonuses: 4
  requiredEmeraldBonuses: 4
}
const elizabethTheFirstOfEngland: ElizabethTheFirstOfEngland = {
  name: "Elizabeth I of England",
  requiredRubyBonuses: 4,
  requiredEmeraldBonuses: 4,
}

type Noble =
  | IsabellaOfCastille
  | FrancoisTheFirst
  | MaryStuart
  | CharlesTheFifth
  | Machiavelli
  | CatherineOfMedici
  | HenryTheEighth
  | AnneOfBrittany
  | SolimanTheMagnificent
  | ElizabethTheFirstOfEngland

export const nobles = new Set<Noble>([
  isabellaOfCastille,
  francoisTheFirst,
  maryStuart,
  charlesTheFifth,
  machiavelli,
  catherineOfMedici,
  henryTheEighth,
  anneOfBrittany,
  solimanTheMagnificent,
  elizabethTheFirstOfEngland,
])
export const noblePrestigePoints = 3

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

interface DevelopmentCard {
  prestigePoints: DevelopmentCardPrestigePoints
  bonus: "Ruby" | "Diamond" | "Onyx" | "Emerald" | "Sapphire"
  numberOfDiamondsRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfRubiesRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfSapphiresRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfOnyxesRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
  numberOfEmeraldsRequiredToBuy: NumberOfResourcesRequiredToBuyDevelopmentCard
}
// const emptyDevelopmentCard: Partial<DevelopmentCard> = {
//   prestigePoints: 0,
//   numberOfDiamondsRequiredToBuy: 0,
//   numberOfRubiesRequiredToBuy: 0,
//   numberOfSapphiresRequiredToBuy: 0,
//   numberOfOnyxesRequiredToBuy: 0,
//   numberOfEmeraldsRequiredToBuy: 0,
// }

const levelOneDevelopmentCards: DevelopmentCard[] = [
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 1,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 4,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 1,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 4,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 4,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 1,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 4,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 0,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 0,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 1,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 4,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 0,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 2,
  },
]
const levelTwoDevelopmentCards: DevelopmentCard[] = [
  {
    prestigePoints: 2,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 5,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 5,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 2,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 5,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 5,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 1,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 3,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 6,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 5,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 3,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 6,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 3,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 6,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 1,
    numberOfOnyxesRequiredToBuy: 4,
  },
  {
    prestigePoints: 1,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 2,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 3,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 6,
  },
  {
    prestigePoints: 2,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 4,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 1,
  },
  {
    prestigePoints: 2,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 5,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 5,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 2,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 1,
    numberOfRubiesRequiredToBuy: 4,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 1,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 3,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 6,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 5,
  },
  {
    prestigePoints: 2,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 5,
  },
  {
    prestigePoints: 1,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 2,
  },
  {
    prestigePoints: 1,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 2,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 1,
    numberOfEmeraldsRequiredToBuy: 4,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 2,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 1,
    numberOfSapphiresRequiredToBuy: 4,
    numberOfEmeraldsRequiredToBuy: 2,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 1,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 2,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 2,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 5,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
]
const levelThreeDevelopmentCards: DevelopmentCard[] = [
  {
    prestigePoints: 3,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 5,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 4,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 6,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 3,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 5,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 4,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 6,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 4,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 7,
  },
  {
    prestigePoints: 5,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 7,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 4,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 7,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 5,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 7,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 4,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 6,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 3,
    bonus: "Emerald",
    numberOfDiamondsRequiredToBuy: 5,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 4,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 7,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 5,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 7,
  },
  {
    prestigePoints: 4,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 7,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 3,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 5,
  },
  {
    prestigePoints: 5,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 7,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 5,
    bonus: "Ruby",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 7,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 0,
  },
  {
    prestigePoints: 4,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 3,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 3,
    numberOfOnyxesRequiredToBuy: 6,
  },
  {
    prestigePoints: 4,
    bonus: "Sapphire",
    numberOfDiamondsRequiredToBuy: 6,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 3,
    bonus: "Diamond",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 3,
    numberOfEmeraldsRequiredToBuy: 3,
    numberOfRubiesRequiredToBuy: 5,
    numberOfOnyxesRequiredToBuy: 3,
  },
  {
    prestigePoints: 4,
    bonus: "Onyx",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 7,
    numberOfOnyxesRequiredToBuy: 0,
  },
]

const stuff = {
  levelOneDevelopmentCards,
  levelTwoDevelopmentCards,
  levelThreeDevelopmentCards,
  nobles: Array.from(nobles),
}

function App() {
  return <ReactJson src={stuff} />
}

export default App
