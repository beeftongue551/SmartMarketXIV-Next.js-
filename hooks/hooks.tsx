import {useEffect, useState} from "react";
import {NewsDataType} from "../types/NewsDataType";
import {getNewsListLimit} from "../api/beef/NewsApi";
import NewsList from "../components/home/NewsList";
import {MarketDataType} from "../types/ItemDataType";
import {getMarketByIDs} from "../api/universalis/MarketApi";

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
    getMarketByIDs(itemIds, worldOrDc).then((marketData) => {
      setMarket(marketData)
    })
  },[ids, worldOrDc])


  return market
}