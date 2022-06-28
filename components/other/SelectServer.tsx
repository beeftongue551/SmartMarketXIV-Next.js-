import {NextPage} from "next";
import {SERVERS} from "../../constants/constants";
import {Col, Row} from "react-bootstrap";
import {Globe} from "react-feather";
import {useState} from "react";

type Props = {
  dataCenter: string
  setServer: Function
}

const SelectServer: NextPage<Props> = (props:Props): JSX.Element => {

  const {dataCenter} = props

  const servers: string[] = SERVERS.get(dataCenter) || []
  const [active, setActive] = useState<string>(dataCenter)

  const serverClickEvent = (server: string) => {
    props.setServer(server)
    setActive(server)
  }

  const activeStyle = {
    width: "100%",
    borderRadius: "0px",
    background: "#5383E8",
    color: "#00fede",
    border: "2px solid #5383E8"
  }

  const  nonActiveStyle = {
    width: "100%",
    borderRadius: "0px",
    background: "#5383E8",
    color: "#FFF",
    border: "2px solid #5383E8"
  }

  const setStyle = (server: string) => {
    if(server === active) {
      console.log(active)
      return activeStyle
    } else {
      console.log(active)
      return nonActiveStyle
    }
  }

  const serverButtons: JSX.Element[] = (
    servers.map((server: string) =>
      <Col className="m-0" style={{width: "100%", padding: "0px"}} key={server}>
        <div
          className="btn btn-primary btn-block"
          style={setStyle(server)}
          onClick={() => serverClickEvent(server)}>{server}</div>
      </Col>
    )
  )

  return (
    <Row className="mx-auto" style={{width: "90%"}}>
      <Col className="m-0" style={{width: "100%", padding: "0px"}}>
        <div
          className="btn btn-block"
          style={setStyle(dataCenter)}
          onClick={() => serverClickEvent(dataCenter)}>
          <Globe width={20} height={20}/> {dataCenter}
        </div>
      </Col>
      {serverButtons}
    </Row>
  )
}
export default SelectServer