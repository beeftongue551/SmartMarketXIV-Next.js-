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
import BeefPagination from "../components/other/BeefPagination";
import {Col, Row} from "react-bootstrap";

const Market:NextPage = () => {

  const [itemsData, setItemsData] = useState<ItemDataDetailType[]>()
  const [pagination, setPagination] = useState<PaginationType>()
  const [searchData, setSearchData] = useState<SearchDataType>()

  /**
   * アイテム検索時に取得できる情報のupdateを行う
   *
   * @param itemData アイテム情報
   * @param pagination ページネーション情報
   * @param searchData 検索情報
   */
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
        <Row className="justify-content-center">
          <Col xs="auto">
            <BeefPagination paginationData={pagination} searchData={searchData} updateEvent={updateEvent}  />
          </Col>
        </Row>
      </Layout>
    </div>
  )
}
export default Market