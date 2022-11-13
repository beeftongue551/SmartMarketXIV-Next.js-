
export type ItemDataType = {
  itemId: number
  itemIcon: string
  itemName: string
  itemLevel: string
  itemSearchCategory: string
  itemSortCategory: number
  itemUICategory: string
  classJobCategory: string
  equipLevel: number
  equipRestriction: boolean
  equipSlotCategory: string
  marketable: boolean
  recipeId: number
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