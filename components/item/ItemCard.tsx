import {NextPage} from "next";
import {ItemDataType} from "../../types/ItemDataType";
import {Card, Col, Row} from "react-bootstrap";
import XivIcon from "../other/XivIcon";

type Props = {
  item: ItemDataType
}

const ItemCard: NextPage<Props> = (props: Props): JSX.Element => {
  const { item } = props

  return (
    <div>
      <Card className="mx-auto" style={{width: "90%"}}>
        <Row>
          <Col xs={2} className="mx-auto"><XivIcon icon={item.itemIcon} alt={item.itemName} size={60}/></Col>
          <Col>
            <Row>
              <Col xs={4} style={{color: "#758592"}}><h4>{item.itemLevel}</h4></Col>
              <Col xs={8}><h4>{item.itemName}</h4></Col>
              <Col>{item.itemUICategory}</Col>
              {
                item.equipLevel !== 1 &&
                <Col style={{color: "#4171d6"}}>装備レベル: <b>{item.equipLevel}</b></Col>
              }
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
export default ItemCard