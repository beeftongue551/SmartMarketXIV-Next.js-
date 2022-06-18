import {getTradableItemBySearchData, getTrebleItemByName} from "../api/beef/ItemApi";
import {ItemDataDetailType, ItemDataType, MarketDataType} from "../types/ItemDataType";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {SearchDataType} from "../types/SearchDataType";
import dayjs from "dayjs";

export const searchEvent = async (searchData: SearchDataType) => {
  if(searchData.isDetail) {
    return await searchDetail(searchData)
  }
  if(searchData.itemName === '' || searchData.dataCenter === '') {
    return
  }

  const itemsData = await  getTrebleItemByName(searchData.itemName)
  const marketData = await getMarketData(itemsData.items, searchData.dataCenter)
  const tradableItems = tradableItemsGenerated(itemsData.items, marketData)

  return {
    tradableItem: tradableItems,
    pagination: itemsData.pagination
  }
}

const searchDetail = async (searchData: SearchDataType) => {
  const itemsData = await getTradableItemBySearchData(searchData)
  const marketData = await getMarketData(itemsData.items, searchData.dataCenter)
  const tradableItems: ItemDataDetailType[] = tradableItemsGenerated(itemsData.items, marketData)
  return {
    tradableItem: tradableItems,
    pagination: itemsData.pagination
  }
}

const getMarketData = async (items: ItemDataType[], dataCenter: string) => {
  const itemIds: number[] = []
  items.forEach((item) => {
    itemIds.push(item.id)
  })
  return await getMarketByIDs(itemIds, dataCenter)
}

const tradableItemsGenerated = (items: ItemDataType[], marketData: any) => {
  let tradableItems: ItemDataDetailType[] = []
  items.forEach((item) => {
    if(marketData === undefined) {
      tradableItems.push({
        item: item,
        marketData: marketData
      })
    } else {
      tradableItems.push({
        item: item,
        marketData: marketData.items[item.id]
      })
    }
  })
  tradableItems = marketCheck(tradableItems)
  return tradableItems
}

const marketCheck = (items: ItemDataDetailType[]) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].marketData === undefined) {
      items[i].marketData.minPrice = 0
      items[i].marketData.averagePrice = 0
      items[i].marketData.listings = []
      items[i].marketData.listings.push({worldName: 'None'})
      continue
    }
    const date = dayjs(items[i].marketData.lastUploadTime)
    items[i].marketData.lastUploadTime = date.format('YYYY-MM-DD HH:mm:ss')

    if (items[i].marketData.listings.length === 0) {
      items[i].marketData.minPrice = 0
      items[i].marketData.averagePrice = 0
      items[i].marketData.listings.push({worldName: 'None'})
    }

    items[i].marketData.averagePrice = Math.round(items[i].marketData.averagePrice)
  }
  return items
}


