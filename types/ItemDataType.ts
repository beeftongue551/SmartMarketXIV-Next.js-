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
  listings: ListingType[],
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

export type ListingType = {
  "lastReviewTime": number,
  "pricePerUnit": number,
  "quantity": number,
  "stainID": number,
  "worldName": string | undefined,
  "worldID": number | undefined,
  "creatorName": string,
  "creatorID": string,
  "hq": boolean,
  "isCrafted": boolean,
  "listingID": null,
  "materia": number[],
  "onMannequin": boolean,
  "retainerCity": number,
  "retainerID": string,
  "retainerName": string,
  "sellerID": string,
  "total": number
}

export type ItemDataDetailType = {
  item: ItemDataType,
  marketData: MarketDataType
}