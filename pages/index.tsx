import type { NextPage } from 'next'
import Layout from "../components/layout";
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import HomeCard from "../components/home/HomeCard";

const Home: NextPage = () => {
  return (
    <div  style={{backgroundColor: '#5383E8'}}>
      <Layout
        title="SmartMarketXIV"
        description="SmartMarketXIVはクラフターを手助けする便利サイトを目指して作成されているサイトです。">
        <Image src="/topImage.png" alt="topページ画像" height={300}  width={1980} objectFit="cover" />
        <Container fluid>
          <Row>
            <Col className="text-center align-middle">
              <strong>SmartMarketXIV</strong>はクラフターを手助けする便利サイトを目指して作成されているサイトです。
            </Col>
          </Row>
          <Row className="mx-auto justify-content-md-center">
            <Col className="col-md-auto">
              <HomeCard
                title="マーケット検索"
                text="アイテムを検索して各DCのマーケット状況を見たい場合はこちら"
                jump="/market" />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default Home
