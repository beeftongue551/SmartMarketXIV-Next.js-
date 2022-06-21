import {NextPage} from "next";
import { Form } from "react-bootstrap";
import {CLASS_JOBS} from "../../constants/constants";

type ChangeEvent = {
  changeJob: Function
}

const InputJob:NextPage<ChangeEvent> = (props:ChangeEvent): JSX.Element => {
  /**
   * ジョブの選択が変更された際に親コンポーネントに選択したジョブを渡す
   *
   * @param event コンポーネントイベント
   */
  const changeJob: (event: any) => void = (event:any)  => {
    props.changeJob(event.target.value)
  }

  return (
    <>
      <Form.Select onChange={changeJob} size="lg">
        {CLASS_JOBS.map((jobData) => {
          return <option value={jobData.jobAbbreviation} key={jobData.jobAbbreviation}>{jobData.jobName}</option>
        })}
      </Form.Select>
    </>
  )
}

export default InputJob