import {NextPage} from "next";
import Layout from "../components/layout";
import MarketSearch from "../components/market/MarketSearch";
import {useState} from "react";
import {ItemDataDetailType} from "../types/ItemDataType";
import {PaginationType} from "../types/PaginationType";
import {SearchDataType} from "../types/SearchDataType";
import PageTitle from "../components/other/PageTitle";
import MarketList from "../components/market/MarketList";
import styles from '../styles/Home.module.css'

const Market:NextPage = () => {

  const [itemsData, setItemsData] = useState<ItemDataDetailType[]>()
  const [pagination, setPagination] = useState<PaginationType>()
  const [searchData, setSearchData] = useState<SearchDataType>()

  const updateEvent = (itemData: ItemDataDetailType[], pagination: PaginationType, searchData: SearchDataType) => {
    setItemsData(itemData)
    setPagination(pagination)
    setSearchData(searchData)
  }

  return (
    <div className={styles.body}>
      <Layout title="MarketSearch"
              description="アイテムを検索して各DCのマーケット状況を見たい場合はこちら" >
        <PageTitle title="Market" subTitle="マーケット検索" />
        <MarketSearch updateEvent={updateEvent} />
        <MarketList itemsData={itemsData} pagination={pagination} searchData={searchData} />
      </Layout>
    </div>
  )
}
export default Market