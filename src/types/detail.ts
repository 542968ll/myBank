export interface detailDataType {
  detailData: detailData,
  financialCycle: financialCycleType[],
  productDescription: rulesType,
  buyInRules: rulesType,
  earningsRules: rulesType,
  redemptionRules: rulesType,
  riskRating: rulesType,
}

export type detailData = {
  title: string,
  percentage: string,
  time: string,
  horizon: string,
  minimum: string,
  buyers: string
}

export type financialCycleType = {
  title: string,
  time: string
}

export type rulesType = {
  title: string,
  description: string
  descriptTitle?: string
}