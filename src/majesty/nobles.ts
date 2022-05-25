import { NobleType } from "types/NobleType"

const isabellaOfCastille: NobleType = {
  name: "Isabella of Castille",
  requiredDiamondBonuses: 4,
  requiredOnyxBonuses: 4,
}

const francoisTheFirst: NobleType = {
  name: "François 1st",
  requiredOnyxBonuses: 3,
  requiredRubyBonuses: 3,
  requiredEmeraldBonuses: 3,
}

const maryStuart: NobleType = {
  name: "Mary Stuart",
  requiredOnyxBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredDiamondBonuses: 3,
}

const charlesTheFifth: NobleType = {
  name: "Charles V",
  requiredOnyxBonuses: 3,
  requiredRubyBonuses: 3,
  requiredDiamondBonuses: 3,
}

const machiavelli: NobleType = {
  name: "Machiavelli",
  requiredSapphireBonuses: 4,
  requiredDiamondBonuses: 4,
}

const catherineOfMedici: NobleType = {
  name: "Catherine of Medici",
  requiredEmeraldBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredRubyBonuses: 3,
}

const henryTheEighth: NobleType = {
  name: "Henry VIII",
  requiredOnyxBonuses: 4,
  requiredRubyBonuses: 4,
}

const anneOfBrittany: NobleType = {
  name: "Anne of Brittany",
  requiredEmeraldBonuses: 3,
  requiredSapphireBonuses: 3,
  requiredDiamondBonuses: 3,
}

const solimanTheMagnificent: NobleType = {
  name: "Soliman the Magnificent",
  requiredSapphireBonuses: 4,
  requiredEmeraldBonuses: 4,
}

const elizabethTheFirstOfEngland: NobleType = {
  name: "Elizabeth I of England",
  requiredRubyBonuses: 4,
  requiredEmeraldBonuses: 4,
}

const nobles = new Set<NobleType>([
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

export default nobles
