import {UNIVERSALIS_API_URL} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";

export const getMarketByIDs = async (itemIds: number[], dataCenter: string) => {
  let url = UNIVERSALIS_API_URL + dataCenter + '/'
  itemIds.forEach(id => {
    url += id + ','
  })
  url = url.slice(0, -1)
  if (url === ('https://universalis.app/api/v2/' + dataCenter + '?listings=1&entries=0')) {
    return
  }
  return await getResponseByGet(url)
}

export const getMarketByID = async (itemId: number, dataCenter: string) => {
  let url = UNIVERSALIS_API_URL + dataCenter + '/' + itemId
  if (url === ('https://universalis.app/api/v2/' + dataCenter + '?listings=1&entries=0')) {
    return
  }
  return await getResponseByGet(url)
}