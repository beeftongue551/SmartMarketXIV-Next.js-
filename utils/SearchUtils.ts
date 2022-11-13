import {getMarketableItem} from "../api/beef/ItemApi";
import {ItemDataDetailType, ItemDataType, ListingType} from "../types/ItemDataType";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {SearchDataType} from "../types/SearchDataType";
import dayjs from "dayjs";

export const searchEvent = async (searchData: SearchDataType, page:number = 1) => {
  if(searchData.itemName === '' || searchData.dataCenter === '') {
    return
  }

  const itemsData = await getMarketableItem(searchData, page)
  const marketData = await getMarketData(itemsData.xivItems, searchData.dataCenter)
  const marketableItem = marketableItemsGenerated(itemsData.xivItems,marketData)

  return {
    tradableItem: marketableItem,
    pagination: itemsData.pagination
  }
}

// const searchDetail = async (searchData: SearchDataType, page:number = 1) => {
//   const itemsData = await getTradableItemBySearchData(searchData, page)
//   const marketData = await getMarketData(itemsData.items, searchData.dataCenter)
//   const tradableItems: ItemDataDetailType[] = tradableItemsGenerated(itemsData.items, marketData)
//   return {
//     tradableItem: tradableItems,
//     pagination: itemsData.pagination
//   }
// }

const getMarketData = async (items: ItemDataType[], dataCenter: string) => {
  const itemIds: number[] = []
  items.forEach((item) => {
    itemIds.push(item.itemId)
  })
  return await getMarketByIDs(itemIds, dataCenter)
}

export const marketableItemsGenerated = (items: ItemDataType[], marketData: any) => {
  let marketableItem: ItemDataDetailType[] = []
  items.forEach((item) => {
    if(marketData.items === undefined) {
      marketableItem.push({
        item: item,
        marketData: marketData
      })
    } else {
      marketableItem.push({
        item: item,
        marketData: marketData.items[item.itemId]
      })
    }
  })
  marketableItem = marketCheck(marketableItem)
  return marketableItem
}

const marketCheck = (items: ItemDataDetailType[]) => {
  const emptyListing: ListingType = {
    creatorID: "",
    creatorName: "",
    hq: false,
    isCrafted: false,
    lastReviewTime: 0,
    listingID: null,
    materia: [],
    onMannequin: false,
    pricePerUnit: 0,
    quantity: 0,
    retainerCity: 0,
    retainerID: "",
    retainerName: "",
    sellerID: "",
    stainID: 0,
    total: 0,
    worldID: undefined,
    worldName: 'None'
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i].marketData === undefined) {
      items[i].marketData.minPrice = 0
      items[i].marketData.averagePrice = 0
      items[i].marketData.listings = []
      items[i].marketData.listings.push(emptyListing)
      continue
    }
    const date = dayjs(items[i].marketData.lastUploadTime)
    items[i].marketData.lastUploadTime = date.format('YYYY-MM-DD HH:mm:ss')

    if (items[i].marketData.listings.length === 0) {
      items[i].marketData.minPrice = 0
      items[i].marketData.averagePrice = 0
      items[i].marketData.listings.push(emptyListing)
    }

    items[i].marketData.averagePrice = Math.round(items[i].marketData.averagePrice)
  }
  return items
}


