import {useEffect, useState} from "react";
import {NewsDataType} from "../types/NewsDataType";
import {getNewsListLimit} from "../api/beef/NewsApi";
import NewsList from "../components/home/NewsList";
import {MarketDataType} from "../types/ItemDataType";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {type} from "os";

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
 * アイテムIDからマーケット情報を取得する
 *
 * @param worldOrDc ワールド名 or データセンタ名
 * @param ids アイテムID
 */
export const useMarket = (worldOrDc: string, ids: number | number[]) => {
  const [market, setMarket] = useState<MarketDataType>()

  useEffect(() => {
    const itemIds: number[] = []
    if(typeof ids === "number") {
      itemIds.push(ids)
    } else {
      ids.map((id) => {
        itemIds.push(id)
      })
    }
    getMarketByIDs(itemIds, worldOrDc).then((marketData: MarketDataType) => {
      setMarket(marketData)
    })
  }, [worldOrDc, ids])

  return market
}