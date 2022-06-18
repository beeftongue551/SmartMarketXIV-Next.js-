import ReactLoading from "react-loading"
import {NextPage} from "next";

type IsLoading = {
  isLoading:boolean
}

const Loading:NextPage<IsLoading> = (props) => {

  const {isLoading} = props

  const styleForOverlay = {
    background: 'rgba(0, 0, 0, 0.2)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    display: 'block'
  }

  if(isLoading) {
    return (
      <div style={styleForOverlay}>
        <ReactLoading
          type="spinningBubbles"
          color="#5383E8"
          height="100px"
          width="100px"
          className="mx-auto"
        />
      </div>
    )
  }
  return (
    <></>
  )
}

export default Loading