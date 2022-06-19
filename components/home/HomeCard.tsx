import {NextPage} from "next";
import {Button, Card} from "react-bootstrap";
import Link from "next/link";

type CardData = {
  title: string
  text: string
  jump: string
  icon?: string
}

const HomeCard:NextPage<CardData> = (cardData): JSX.Element => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.text}</Card.Text>
        <Link href={cardData.jump} passHref>
          <Button variant="info"><span className="material-icons">{cardData.icon}</span>{cardData.title}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default HomeCard