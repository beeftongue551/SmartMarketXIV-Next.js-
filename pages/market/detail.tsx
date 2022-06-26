import {NextPage} from "next";
import {useRouter} from "next/router";
import {useState} from "react";
import SelectServer from "../../components/other/SelectServer";
import styles from '../../styles/Home.module.css'

const Detail: NextPage = ():JSX.Element => {

  // クエリパラメータの取得
  const router = useRouter()
  const { id, dataCenter } = router.query
  let selectedDataCenter = 'Mana'
  if(dataCenter !== undefined) {
    if (typeof dataCenter === "string") {
      selectedDataCenter = dataCenter
    }
  }
  const [server, setServer] = useState("Mana")

  return (
    <div className={styles.body}>
      <SelectServer dataCenter={selectedDataCenter} setServer={setServer} />
    </div>
  )
}

export default Detail