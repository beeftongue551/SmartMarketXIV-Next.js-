import {NextPage} from "next";
import React, {useState} from "react";
import {Button, Card, Col, Form, Modal, Row, Spinner} from "react-bootstrap";
import InputDataCenter from "../input/InputDataCenter";
import {SearchDataType} from "../../types/SearchDataType";
import {searchEvent} from "../../utils/SearchUtils";
import Loading from "../other/Loading";
import InputJob from "../input/InputJob";
import {event} from "next/dist/build/output/log";

type SearchEvent = {
  updateEvent: Function
}

const MarketSearch: NextPage<SearchEvent> = (props) => {
  const [itemName, setItemName] = useState('')
  const changeItemName = (event:any) => {
    setItemName(event.target.value)
  }

  const [dcName, setDCName] = useState('Mana')
  const changeDCName = (dataCenter: string) => {
    setDCName(dataCenter)
  }

  const [jobAbbreviation, setJobAbbreviation] = useState('')
  const changeJob = (jobAbbreviation: string) => {
    setJobAbbreviation(jobAbbreviation)
  }

  const [jobLevel, setJobLevel] = useState(90)
  const changeJobLevel = (jobLevel: number) => {
    setJobLevel(jobLevel)
  }

  const [isDetail, setIsDetail] = useState<boolean>(false)
  const changeIsDetail = () => {
    setIsDetail(!isDetail)
  }

  const [loading, setLoading] =useState<boolean>(false)
  const loadingStart = () => {
    setLoading(true)
  }
  const loadingEnd = () => {
    setLoading(false)
  }

  /**
   * アイテム検索を実行する
   */
  const searchButtonEvent = async () => {
    loadingStart()


    const searchData: SearchDataType = {
      dataCenter: dcName,
      isDetail: isDetail,
      itemName: itemName,
      jobAbbreviation: jobAbbreviation,
      jobLevel: jobLevel
    }
    const itemData = await searchEvent(searchData)

    const tradableItems = itemData?.tradableItem
    const pagination = itemData?.pagination

    props.updateEvent(tradableItems, pagination, searchData)
    loadingEnd()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    searchButtonEvent()
  }

  const detailButtonStyle = {
    background: "#5383E8",
    border: "2px solid #5383E8"
  }

  const levelCheck = (event: any) => {
    if(event.target.value > 90) {
      setJobLevel(90)
    } else if (event.target.value < 0) {
      setJobLevel(0)
    } else {
      setJobLevel(event.target.value)
    }
  }

  return(
    <>

      <Row className="p-2 col-md-10 mx-auto">
        <Col xs={12} md={6}>
          <Form.Control placeholder="アイテム名"
                        value={itemName}
                        onChange={changeItemName}
                        onKeyDown={handleKeyDown} />
        </Col>
        <Col xs={8} md={4}>
          <InputDataCenter changeDCName={changeDCName} />
        </Col>
        <Col xs={4} md={2}>
          <Button variant="primary" onClick={searchButtonEvent}>検索</Button>
        </Col>
      </Row>

      <Card style={{width: "90%", border: "2px solid #5383E8"}}
            className="mx-auto rounded-0"
      >
        <button className="btn btn-secondary rounded-0" style={detailButtonStyle} onClick={changeIsDetail} >装備詳細</button>
      </Card>


      { isDetail &&
        <Card style={{width: "90%", backgroundColor: "#5383E8", border: "2px solid #5383E8"}}
              className="mx-auto rounded-0" >
          <Row className="p-3 col-md-10 mx-auto">
            <Col xs={6} md={5} style={detailButtonStyle}>
              <InputJob changeJob={changeJob} />
            </Col>
            <Col xs={1} md={2} style={detailButtonStyle}>
            </Col>
            <Col xs={5} md={5} style={detailButtonStyle}>
              <div className="form-floating">
                <input type={"number"} className="form-control" value={jobLevel} max="90" min="0" onChange={levelCheck} />
                <label htmlFor="floatingLevel">Level</label>
              </div>
            </Col>
          </Row>
      </Card>
      }
    </>
  )
}

export default MarketSearch