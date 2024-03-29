import {ItemDataType, MarketDataType} from "../../types/ItemDataType";
import {NextPage} from "next";
import {Card, Col, Row} from "react-bootstrap";
import XivIcon from "../other/XivIcon";
import {useState} from "react";
import {getRecipe} from "../../utils/RecipeUtils";
import {RecipeType} from "../../types/RecipeType";
import {NextRouter, useRouter} from "next/router";
import {useFavoriteItemFlag} from "../../hooks/hooks";
import FavoriteStar from "../other/FavoriteStar";

type Props = {
  market: MarketDataType
  item: ItemDataType
  dataCenter: string
  setRecipeData: Function
}
const MarketExpansionBar: NextPage<Props> = (props): JSX.Element => {

  const {item, market, dataCenter} = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router: NextRouter = useRouter()
  const [favoriteFlag,{changeFavoriteItem}] = useFavoriteItemFlag(item.itemId)

  /**
   * ExpansionBarの開閉状態を変更する
   */
  const openMarket: () => void = () => {
    setIsOpen(!isOpen)
  }

  const openMarketDetail: () => void = () => {
    router.push("/market/detail?id=" + item.itemId + "&dataCenter=" + dataCenter)
  }

  /**
   * クラフトレシピを取得し親コンポーネントに渡す
   *
   * @param recipeId レシピID
   */
  const getRecipeData: (recipeId: number) => Promise<void> = async (recipeId: number) => {
    const recipeData: RecipeType = await getRecipe(item.itemId ,recipeId, props.dataCenter)
    props.setRecipeData(recipeData)
  }

  return (
    <Card style={{width: '90%'}} className="mx-auto">
      <Card.Body>
        <Row onClick={openMarket}>
          <Col xs={2} md={1} className={"mx-auto"}>
            <XivIcon icon={item.itemIcon} alt={item.itemName} size={40}></XivIcon>
          </Col>
          <Col xs={10} md={11}>
            <Row>
              <Col xs={6} md={8}>
                <b>{item.itemName}</b><FavoriteStar starFlag={favoriteFlag} onClick={() => changeFavoriteItem(item.itemId)}/>
              </Col>
              <Col xs={3} md={2} className="text-end">
                IL: {item.itemLevel}
              </Col>
              <Col xs={3} md={2} className="text-end">
                IL: {item.equipLevel}
              </Col>
              <Col xs={12} md={4} className="d-flex align-middle">
                {item.itemUICategory}
              </Col>
              <Col xs={12} md={8} className="text-end">
                {item.classJobCategory}
              </Col>
            </Row>
          </Col>
        </Row>
        {
          isOpen &&
          <Row>
            <Col sm={12} md={4}>
              最安値: {market.minPrice}
            </Col>
            <Col sm={12} md={4}>
              販売サーバ: {market.listings[0].worldName}
            </Col>
            <Col sm={12} md={4}>
              HQ最安値: {market.minPriceHQ}
            </Col>
            <Col sm={12} md={4}>
              平均価格: {(market.averagePrice + market.minPrice)/2}
            </Col>
            <Col sm={6} md={4}><button type="button" className="btn btn-success" onClick={() => openMarketDetail()}>マーケット詳細</button></Col>
            <Col sm={6} md={4}>
              {item.recipeId &&
              <button type="button" className="btn btn-success" onClick={() => getRecipeData(item.recipeId)}>レシピ表示</button>}
            </Col>
            <span className={"text-end"} style={{color: 'gray'}}>更新時間: {market.lastUploadTime}</span>
          </Row>
        }
      </Card.Body>
    </Card>
  )
}

export default MarketExpansionBar