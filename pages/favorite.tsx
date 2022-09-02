import {NextPage} from "next";
import Layout from "../components/layout";
import {useEffect, useState} from "react";
import {ItemDataDetailType, ItemDataType} from "../types/ItemDataType";
import {PaginationType} from "../types/PaginationType";
import {SearchDataType} from "../types/SearchDataType";
import PageTitle from "../components/other/PageTitle";
import MarketList from "../components/market/MarketList";
import styles from '../styles/Home.module.css'
import BeefPagination from "../components/other/BeefPagination";
import {Col, Row} from "react-bootstrap";
import InputDataCenter from "../components/input/InputDataCenter";
import {FAVORITE_ITEM_LIST_KSY} from "../constants/constants";
import {getItemByItemId} from "../api/beef/ItemApi";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {Dropdown} from "@restart/ui";
import Item = Dropdown.Item;
import {tradableItemsGenerated} from "../utils/SearchUtils";

const Favorite:NextPage = (): JSX.Element => {

  const [favoriteItems, setFavoriteItems] = useState<ItemDataDetailType[]>([])
  let favoriteList: number[] = []

  useEffect(() => {
    const json = localStorage.getItem(FAVORITE_ITEM_LIST_KSY)
    if(json !== null) {
      favoriteList = JSON.parse(json)
    }
  },[])
  /**
   * アイテム検索時に取得できる情報のupdateを行う
   *
   * @param itemData アイテム情報
   * @param pagination ページネーション情報
   * @param searchData 検索情報
   */
  const updateEvent = async (dataCenter: string) => {
    const marketData = await getMarketByIDs(favoriteList, dataCenter)
    const itemsData: ItemDataType[] = []

    for (const itemId of favoriteList) {
      console.log(itemId)
      const itemData: ItemDataType = await getItemByItemId(Number(itemId))
      itemsData.push(itemData)
    }
    setFavoriteItems(tradableItemsGenerated(itemsData, marketData))
  }

  return (
      <div className={styles.body}>
        <Layout title="MarketSearch"
                description="アイテムを検索して各DCのマーケット状況を見たい場合はこちら" >
          <PageTitle title="Market" subTitle="マーケット検索" />
          <InputDataCenter changeDCName={updateEvent}></InputDataCenter>
          <MarketList itemsData={favoriteItems} />
        </Layout>
      </div>
  )
}

export default Favorite