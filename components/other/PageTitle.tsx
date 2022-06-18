import {NextPage} from "next";

type TitleProp = {
  title: string,
  subTitle: string
}

const PageTitle: NextPage<TitleProp> = (props) => {
  return (
    <>
      <h1 className="text-center">{props.title}</h1>
      <h5 className="text-center">{props.subTitle}</h5>
    </>
  )
}

export default PageTitle