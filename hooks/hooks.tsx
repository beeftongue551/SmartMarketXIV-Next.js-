import {useEffect, useState} from "react";
import {NewsDataType} from "../types/NewsDataType";
import {getNewsListLimit} from "../api/beef/NewsApi";
import NewsList from "../components/home/NewsList";
import {MarketDataType} from "../types/ItemDataType";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {FAVORITE_ITEM_LIST_KSY} from "../constants/constants";

/**
 * お知らせ取得用カスタムフック
 */
export const useNews = (): JSX.Element => {
  const [news, setNews] =useState<NewsDataType[]>([])

  /**
   * APIからお知らせ情報を取得する。
   */
  useEffect(() => {
    const getNewsData = async () => {
      const newsData = await getNewsListLimit(3)
      setNews(newsData)
    }
    getNewsData()
  },[])

  return <NewsList newsData={news}></NewsList>
}

/**
 * マーケット情報取得用カスタムフック
 *
 * @param worldOrDc DC名またはワールド名
 * @param ids アイテムID
 */
export const useMarket: (worldOrDc: string, ids: (number | number[])) => MarketDataType = (worldOrDc: string, ids: number | number[]) => {
  const [market, setMarket] = useState<MarketDataType>({
      averagePrice: 0,
      averagePriceHQ: 0,
      averagePriceNQ: 0,
      currentAveragePrice: 0,
      currentAveragePriceHQ: 0,
      currentAveragePriceNQ: 0,
      dcName: "",
      hqSaleVelocity: 0,
      itemID: 0,
      lastUploadTime: 0,
      listings: [],
      maxPrice: 0,
      maxPriceHQ: 0,
      maxPriceNQ: 0,
      minPrice: 0,
      minPriceHQ: 0,
      minPriceNQ: 0,
      nqSaleVelocity: 0,
      recentHistory: [],
      regularSaleVelocity: 0,
      stackSizeHistogram: undefined,
      stackSizeHistogramHQ: undefined,
      stackSizeHistogramNQ: undefined,
      worldUploadTimes: undefined
  })

  useEffect(() => {
    const itemIds: number[] = []
    if(typeof ids === "number") {
      itemIds.push(ids)
    } else {
      ids.map((id: number) => {
        itemIds.push(id)
      })
    }
    getMarketByIDs(itemIds, worldOrDc).then((marketData: MarketDataType) => {
      setMarket(marketData)
    })
  },[ids, worldOrDc])
  return market
}

export const useFavoriteItemFlag: (itemId: number) => [boolean, { removeFavoriteItem: (itemId: number) => void; addFavoriteItem: (itemId: number) => void }] = (itemId: number) => {
  const [favoriteList, setFavoriteList] = useState<number[] >([])
  const [favoriteFlag, setFavoriteFlag] = useState<boolean>(false)

  useEffect((): void => {
    const json: string | null = localStorage.getItem(FAVORITE_ITEM_LIST_KSY)
    if(json === null) {
      return
    }
    const array: string[] = JSON.parse(json)
    const idList:number[] = []
    array.map((strNumber: string) => {
      idList.push(parseInt(strNumber,10))
    })

    setFavoriteList(idList)
    setFavoriteFlag(favoriteList.includes(itemId))
  },[favoriteList, itemId])

  const addFavoriteItem: (itemId: number) => void = (itemId: number) => {
    setFavoriteList(prevList => {
      prevList.push(itemId)
      return prevList
    })
    localStorage.setItem(FAVORITE_ITEM_LIST_KSY, JSON.stringify(favoriteList))
  }

  const removeFavoriteItem: (itemId: number) => void = (itemId: number) => {
    setFavoriteList(prevList => {
      return prevList.filter((id: number) => id !== itemId)
    })
    localStorage.setItem(FAVORITE_ITEM_LIST_KSY, JSON.stringify(favoriteList))
  }

  return [favoriteFlag, {addFavoriteItem, removeFavoriteItem}]
}