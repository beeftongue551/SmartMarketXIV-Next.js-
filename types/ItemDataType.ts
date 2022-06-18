export type ItemDataType = {
  id: number
  itemIcon: string
  itemName: string
  itemLevel: string
  itemCategory: string
  itemCategoryIcon: string
  recipeId: number
  equipmentLevel: number
  jobCategoryName: string
}

export type MarketDataType = {
  itemID: number,
  lastUploadTime: number | string,
  listings: any[],
  recentHistory: any[],
  dcName: string,
  currentAveragePrice: number,
  currentAveragePriceNQ: number,
  currentAveragePriceHQ: number,
  regularSaleVelocity: number,
  nqSaleVelocity: number,
  hqSaleVelocity: number,
  averagePrice: number,
  averagePriceNQ: number,
  averagePriceHQ: number,
  minPrice: number,
  minPriceNQ: number,
  minPriceHQ: number,
  maxPrice: number,
  maxPriceNQ: number,
  maxPriceHQ: number,
  stackSizeHistogram: any
  stackSizeHistogramNQ: any
  stackSizeHistogramHQ: any
  worldUploadTimes: any
}

export type ItemDataDetailType = {
  item: ItemDataType,
  marketData: MarketDataType
}