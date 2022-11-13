import {NextPage} from "next";
import {useEffect, useState} from "react";
import {HeartFill} from "react-bootstrap-icons";

type Props = {
  starFlag: boolean
  onClick: Function
}
const FavoriteStar: NextPage<Props> = (props: Props) => {
  const [starFlag, setStarFlag] = useState<boolean>(props.starFlag)

  useEffect(() => {
    setStarFlag(props.starFlag)
  },[props.starFlag])
  const changeStarEvent = (e: any) => {
    e.stopPropagation()
    props.onClick()
  }


  const star = () => {
    if(starFlag) {
      return (
        <HeartFill
          color="rgb(249, 24, 128)"
          width={20}
          height={20}
          onClick={changeStarEvent}
        />
      )
    } else {
      return (
        <HeartFill
          width={20}
          height={20}
          onClick={changeStarEvent}
        />
      )
    }
  }
  return (
    <>
      {star()}
    </>
  )
}
export default FavoriteStar