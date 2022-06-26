import {NextPage} from "next";
import {SERVERS} from "../../constants/constants";
import {Col, Row} from "react-bootstrap";
import {Globe} from "react-feather";

type Props = {
  dataCenter: string
  setServer: Function
}

const SelectServer: NextPage<Props> = (props:Props): JSX.Element => {

  const {dataCenter} = props

  const servers: string[] = SERVERS.get(dataCenter) || []

  const serverButtons: JSX.Element[] = (
    servers.map((server: string) =>
      <Col className="m-0" style={{width: "100%", padding: "0px"}} key={server}>
        <div className="btn btn-primary btn-block" style={{width: "100%", borderRadius: "0px"}} onClick={props.setServer(server)}>{server}</div>
      </Col>
    )
  )

  return (
    <Row>

      <Col className="m-0" style={{width: "100%", padding: "0px"}}>
        <div
          className="btn btn-primary btn-block"
          style={{width: "100%", borderRadius: "0px", minWidth: "100px"}}
          onClick={props.setServer(dataCenter)}>
          <Globe width={20} height={20}/> {dataCenter}
        </div>
      </Col>
      {serverButtons}
    </Row>
  )
}
export default SelectServer