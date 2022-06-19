import {useEffect, useState} from "react";
import {NewsDataType} from "../types/NewsDataType";
import {getNewsListLimit} from "../api/beef/NewsApi";
import NewsList from "../components/home/NewsList";

export const useNews = () => {
  const [news, setNews] =useState<NewsDataType[]>([])

  useEffect(() => {
    const getNewsData = async () => {
      const newsData = await getNewsListLimit(3)
      setNews(newsData)
    }
    getNewsData()
  },[])

  return <NewsList newsData={news}></NewsList>
}