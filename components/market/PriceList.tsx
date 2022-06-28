import {NextPage} from "next";
import {useMarket} from "../../hooks/hooks";
import {ListingType, MarketDataType} from "../../types/ItemDataType";
import Image from "next/image";
import dayjs from "dayjs";

const PriceList:NextPage<{itemId: number, worldOrDc: string}> = (props: {itemId: number, worldOrDc: string}):JSX.Element => {
  const { itemId, worldOrDc } = props
  const marketData: MarketDataType = useMarket(worldOrDc, itemId)

  const priceList:() => JSX.Element[] = () => {
    const element: JSX.Element[] = []
    marketData.listings.map((listing: ListingType) => {
      if(listing.worldName === undefined) {
        listing.worldName = worldOrDc
      }
      element.push((
        <tr>
          <td>{listing.hq && <Image  src="/hq.png" width={20} height={20}/>}</td>
          <td>{listing.worldName}</td>
          <td style={{color: "#4171d6"}}><b>{listing.pricePerUnit}</b></td>
          <td>{listing.quantity}</td>
          <td style={{color: "#4171d6"}}><b>{listing.total}</b></td>
          <td>{dayjs(listing.lastReviewTime*1000).add(9,'h').format('MM/DD HH:mm').toString()}</td>
        </tr>
      ))
    })
    return element
  }

  return (
    <table className="table mx-auto" style={{width: "90%"}}>
      <thead style={{background: "#ebeef1", color:"#9aa4af"}}>
        <tr>
          <th scope="col">HQ</th>
          <th scope="col">サーバー</th>
          <th scope="col">価格</th>
          <th scope="col">量</th>
          <th scope="col">全額</th>
          <th scope="col">最終確認時間</th>
        </tr>
      </thead>
      <tbody style={{background: "#fff"}}>
      {priceList()}
      </tbody>
    </table>
  )
}
export default PriceList