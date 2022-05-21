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
    prestigePoints: -1,
    bonus: "",
    numberOfDiamondsRequiredToBuy: 0,
    numberOfSapphiresRequiredToBuy: 0,
    numberOfEmeraldsRequiredToBuy: 0,
    numberOfRubiesRequiredToBuy: 0,
    numberOfOnyxesRequiredToBuy: 0,
  },
]
const levelTwoDevelopmentCards: DevelopmentCard[] = []
const levelThreeDevelopmentCards: DevelopmentCard[] = []

const stuff = {
  developmentCards: [
    levelOneDevelopmentCards,
    levelTwoDevelopmentCards,
    levelThreeDevelopmentCards,
  ],
  nobles: Array.from(nobles),
}

function App() {
  return <ReactJson src={stuff} />
}

export default App
