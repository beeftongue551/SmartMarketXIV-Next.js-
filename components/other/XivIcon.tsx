import {NextPage} from "next";
import {XIV_API_URL} from "../../constants/constants";
import Image from "next/image";

type Prop = {
  icon: string,
  alt: string,
  size: number
}

const XivIcon: NextPage<Prop> = (props: Prop): JSX.Element => {
  let srcUrl: string = XIV_API_URL + props.icon
  srcUrl = srcUrl.replace(".png", "_hr1.png")
  return (
    <Image src={srcUrl} alt={props.alt} height={props.size} width={props.size} objectFit="contain"/>
  )
}

export default XivIcon