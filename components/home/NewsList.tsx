import {NextPage} from "next";
import {Badge, Card, ListGroup} from "react-bootstrap";
import {NewsDataType} from "../../types/NewsDataType";


type newsData = {
  newsData: NewsDataType[]
}

const NewsList: NextPage<newsData> = (props: newsData): JSX.Element => {
  const NewsListItems: JSX.Element[] = (
    props.newsData.map((news: NewsDataType) =>
      <ListGroup.Item key={news.id}>
          <Badge bg="info">{news.newsType}</Badge>
          <span>{news.newsText}</span><br />
          <div className="text-end" style={{color: "gray"}}>
            {news.newsDate}
          </div>
      </ListGroup.Item>
    )
  )
  return (
    <div className="mx-auto" style={{width: "80%"}}>
      <ListGroup className="mx-auto">
        <ListGroup.Item><b>お知らせ</b></ListGroup.Item>
        {NewsListItems}
      </ListGroup>
    </div>
  )
}

export default NewsList