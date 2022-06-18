import {NextPage} from "next";
import { Form } from "react-bootstrap";
import {CLASS_JOBS} from "../../constants/constants";

type ChangeEvent = {
  changeJob: Function
}

const InputJob:NextPage<ChangeEvent> = (props) => {
  const changeJob = (event:any)  => {
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