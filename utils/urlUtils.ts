import axios, {AxiosResponse} from "axios";

/**
 * GETメソッド通信を行ったレスポンスを取得する
 *
 * @param url 対象URL
 */
export const getResponseByGet = async (url: string) => {
  let dataCash: any
  await axios.get(url).then((response:AxiosResponse) => {
    return response.data
  }).then((data:AxiosResponse) => {
    dataCash = data
  }).catch((error) => {
    console.error(error)
    return
  })
  return dataCash
}