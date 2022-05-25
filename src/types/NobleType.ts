export interface IsabellaOfCastille {
  name: "Isabella of Castille"
  requiredDiamondBonuses: 4
  requiredOnyxBonuses: 4
}

export interface FrancoisTheFirst {
  name: "François 1st"
  requiredOnyxBonuses: 3
  requiredRubyBonuses: 3
  requiredEmeraldBonuses: 3
}

export interface MaryStuart {
  name: "Mary Stuart"
  requiredOnyxBonuses: 3
  requiredSapphireBonuses: 3
  requiredDiamondBonuses: 3
}

export interface CharlesTheFifth {
  name: "Charles V"
  requiredOnyxBonuses: 3
  requiredRubyBonuses: 3
  requiredDiamondBonuses: 3
}

export interface Machiavelli {
  name: "Machiavelli"
  requiredSapphireBonuses: 4
  requiredDiamondBonuses: 4
}

export interface CatherineOfMedici {
  name: "Catherine of Medici"
  requiredEmeraldBonuses: 3
  requiredSapphireBonuses: 3
  requiredRubyBonuses: 3
}

export interface HenryTheEighth {
  name: "Henry VIII"
  requiredOnyxBonuses: 4
  requiredRubyBonuses: 4
}

export interface AnneOfBrittany {
  name: "Anne of Brittany"
  requiredEmeraldBonuses: 3
  requiredSapphireBonuses: 3
  requiredDiamondBonuses: 3
}

export interface SolimanTheMagnificent {
  name: "Soliman the Magnificent"
  requiredSapphireBonuses: 4
  requiredEmeraldBonuses: 4
}

export interface ElizabethTheFirstOfEngland {
  name: "Elizabeth I of England"
  requiredRubyBonuses: 4
  requiredEmeraldBonuses: 4
}

export type NobleType =
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
