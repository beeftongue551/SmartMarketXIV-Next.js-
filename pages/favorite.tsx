import {NextPage} from "next";
import Layout from "../components/layout";
import {useEffect, useState} from "react";
import {ItemDataDetailType, ItemDataType} from "../types/ItemDataType";
import PageTitle from "../components/other/PageTitle";
import MarketList from "../components/market/MarketList";
import styles from '../styles/Home.module.css'
import InputDataCenter from "../components/input/InputDataCenter";
import {FAVORITE_ITEM_LIST_KSY} from "../constants/constants";
import {getItemByItemId} from "../api/beef/ItemApi";
import {getMarketByIDs} from "../api/universalis/MarketApi";
import {marketableItemsGenerated} from "../utils/SearchUtils";
import {SearchDataType} from "../types/SearchDataType";

const Favorite:NextPage = (): JSX.Element => {

  const [favoriteItems, setFavoriteItems] = useState<ItemDataDetailType[]>([])
  let favoriteList: number[] = []
  const [searchData, setSearchData] = useState<SearchDataType>({
    isDetail: false,
    itemName: '',
    dataCenter: '',
    jobAbbreviation: undefined,
    jobLevel: undefined
  })

  useEffect(() => {
    updateEvent("Mana")
  },[])

  /**
   * アイテム検索時に取得できる情報のupdateを行う
   *
   * @param dataCenter データセンター
   */
  const updateEvent = async (dataCenter: string) => {
    const json = localStorage.getItem(FAVORITE_ITEM_LIST_KSY)
    if(json !== null) {
      favoriteList = JSON.parse(json)
    }
    const marketData = await getMarketByIDs(favoriteList, dataCenter)
    const itemsData: ItemDataType[] = []

    for (const itemId of favoriteList) {
      console.log(itemId)
      const itemData: ItemDataType = await getItemByItemId(Number(itemId))
      itemsData.push(itemData)
    }
    setSearchData({
      isDetail: false,
      itemName: '',
      dataCenter: dataCenter,
      jobAbbreviation: undefined,
      jobLevel: undefined
    })
    setFavoriteItems(marketableItemsGenerated(itemsData, marketData))
  }

  return (
      <div className={styles.body}>
        <Layout title="MarketSearch"
                description="お気に入りに登録したアイテムを見たい場合はこちら" >
          <PageTitle title="Favorite" subTitle="お気に入り" />
          <div style={{width: '90%'}} className="mx-auto">
            <InputDataCenter changeDCName={updateEvent}></InputDataCenter>
          </div>
          <MarketList itemsData={favoriteItems} searchData={searchData}/>
        </Layout>
      </div>
  )
}

export default Favorite