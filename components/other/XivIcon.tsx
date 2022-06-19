import {NextPage} from "next";
import {XIV_API_URL} from "../../constants/constants";
import Image from "next/image";

type Prop = {
  icon: string,
  alt: string,
  size: number
}

const XivIcon: NextPage<Prop> = (props: Prop): JSX.Element => {
  const srcUrl = XIV_API_URL + props.icon
  return (
    <Image src={srcUrl} alt={props.alt} height={props.size} width={props.size} objectFit="contain"/>
  )
}

export default XivIcon