import {NextPage} from "next";
import {Form} from "react-bootstrap";
import {DATA_CENTERS} from "../../constants/constants";

type ChangeEvent = {
  changeDCName: Function
}

const InputDataCenter: NextPage<ChangeEvent> = (props):JSX.Element => {

  /**
   * dcの選択が変更された際に親コンポーネントに選択したDCを渡す
   *
   * @param event コンポーネントイベント
   */
  const changeDCName = (event: any) => {
    props.changeDCName(event.target.value)
  }

  return (
    <>
      <Form.Select aria-label="DC" onChange={changeDCName}>
        {DATA_CENTERS.map((data) => {
          return <option value={data} key={data}>{data}</option>
        })}
      </Form.Select>
    </>
  )
}

export default InputDataCenter