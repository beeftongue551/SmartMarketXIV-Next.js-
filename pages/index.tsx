import type { NextPage } from 'next'
import Layout from "../components/layout";
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import HomeCard from "../components/home/HomeCard";
import {useNews} from "../hooks/hooks";

const Home: NextPage = () => {

  /**
   * ニュースリスト取得カスタムフックの呼び出し
   */
  const news = useNews()

  return (
    <div style={{backgroundColor: '#5383E8'}}>
      <Layout
        title="SmartMarketXIV"
        description="SmartMarketXIVはFF14の相場をパパッと確認するためのサイトです。売りたいアイテム買いたいアイテムを検索して相場をチラ見することができます。">
        <Image src="/topImage.png" alt="topページ画像" height={300} width={1980} objectFit="cover"/>
        <Container fluid>
          <Row>
            <Col className="text-center align-middle" style={{color: "white"}}>
              <h1>SmartMarketXIV</h1>
              <strong>SmartMarketXIV</strong>はFF14の相場をパパッと確認するためのサイトです。<br/>
              売りたいアイテム買いたいアイテムを検索して相場をチラ見することができます。
            </Col>
          </Row>
          <br />
          <Row className="mx-auto justify-content-center">
            <Col className="col-auto">
              <HomeCard
                title="マーケット検索"
                text="アイテムを検索して各DCのマーケット状況を見たい場合はこちら"
                jump="/market"/>
            </Col>
            <Col className="col-auto">
              <HomeCard
                title="お気に入りアイテムへ"
                text="お気に入りに登録したアイテムを確認したい場合はこちらへ"
                jump="/favorite"/>
            </Col>
          </Row>
        </Container>
        <br />
        {news}
      </Layout>
    </div>
  )
}

export default Home
