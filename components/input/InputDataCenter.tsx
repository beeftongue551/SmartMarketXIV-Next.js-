import {NextPage} from "next";
import {Form} from "react-bootstrap";
import {DATA_CENTERS} from "../../constants/constants";
import {ChangeEvent} from "react";



type ChangeEventProps = {
  changeDCName: Function
}

const InputDataCenter: NextPage<ChangeEventProps> = (props: ChangeEventProps):JSX.Element => {

  /**
   * dcの選択が変更された際に親コンポーネントに選択したDCを渡す
   *
   * @param event コンポーネントイベント
   */
  const changeDCName: (event: ChangeEvent<HTMLSelectElement> ) => void = (event: ChangeEvent<HTMLSelectElement>) => {
    props.changeDCName(event.target.value)
    console.log(event)
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