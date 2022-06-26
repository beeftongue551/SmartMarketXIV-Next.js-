import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import SelectServer from "../../components/other/SelectServer";
import styles from '../../styles/Home.module.css'
import ItemCard from "../../components/item/ItemCard";
import {ItemDataType} from "../../types/ItemDataType";
import {getItemByItemId} from "../../api/beef/ItemApi";

const Detail: NextPage = ():JSX.Element => {

  // クエリパラメータの取得
  const router = useRouter()
  const { id, dataCenter } = router.query
  let selectedDataCenter = 'Mana'
  if(dataCenter !== undefined) {
    if (typeof dataCenter === 'string') {
      selectedDataCenter = dataCenter
    }
  }


  const [itemData, setItemData] = useState<ItemDataType>({
    equipmentLevel: 0, id: 0, itemCategory: "", itemCategoryIcon: "", itemIcon: "", itemLevel: "", itemName: "", jobCategoryName: "", recipeId: 0
  })

  useEffect(() => {
    //THINK: 無限に呼び出される
    if (typeof id === "string") {
      getItemByItemId(Number(id)).then((itemData) => {
        setItemData(itemData)
      })
    }
  },[id])

  const [server, setServer] = useState("Mana")

  return (
    <div className={styles.body}>
      <ItemCard item={itemData} />
      <br/>
      <SelectServer dataCenter={selectedDataCenter} setServer={setServer} />

    </div>
  )
}

export default Detail