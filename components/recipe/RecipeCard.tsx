import {RecipeType} from "../../types/RecipeType";
import {NextPage} from "next";
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import XivIcon from "../other/XivIcon";
import {resetRecipeData} from "../../utils/RecipeUtils";

type Props = {
  recipeData: RecipeType
  setRecipeData: Function
  dataCenter: string
}

const RecipeCard: NextPage<Props> = (props: Props): JSX.Element => {

  const {recipeData, dataCenter} = props

  /**
   * レシピデータを空に変更しレシピカードを非表示にする
   */
  const closeRecipeCard = () => {
    props.setRecipeData(resetRecipeData())
  }

  const openMarketDetail: (itemId: number) => void = (itemId: number) => {
    window.open("/market/detail?id="+ itemId + "&dataCenter=" + dataCenter)
  }


  /**
   * 素材データリストを作成する
   */
  const ingredientsList = (
    recipeData.ingredients.map((ingredient) => (
      <ListGroupItem key={ingredient.itemId} onClick={() =>openMarketDetail(ingredient.itemId)}>
        <Row>
          <Col xs={2} md={2}>
            <XivIcon icon={ingredient.itemIcon} alt={ingredient.itemName} size={30} />
          </Col>
          <Col xs={4} md={4} className="text-start">
            <b>{ingredient.itemName}</b>
          </Col>
          <Col xs={3} md={3} className="text-center">
            必要個数:{ingredient.amount}
          </Col>
          <Col xs={3} md={3} className="text-end">
            必要ギル:{ingredient.gillTotal}
          </Col>
        </Row>
      </ListGroupItem>
    ))
  )

  return (
    <>
      {recipeData.itemName!=='' &&
      <Card style={{width: '90%'}} className="mx-auto">
        <Card.Body>
          <Card.Title><b>{recipeData.itemName}</b></Card.Title>
          <Card.Subtitle>作成JOB:{recipeData.craftType}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          {ingredientsList}
        </ListGroup>
        <Card.Body>
          <span>一つあたりの最小経費：{recipeData.gillParOne}</span><br />
          <button type="button" className="btn btn-outline-danger" onClick={closeRecipeCard}>CLOSE</button>
        </Card.Body>
      </Card>}
    </>
  )
}

export default RecipeCard