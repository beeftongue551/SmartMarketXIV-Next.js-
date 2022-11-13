import {BEEF_API} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";
import {SearchDataType} from "../../types/SearchDataType";

export const getItemByItemId = async (itemId: number) => {
  const url = BEEF_API + 'item/' + itemId
  return await getResponseByGet(url)
}

export const getMarketableItem = async (searchData: SearchDataType, page = 1) => {
  let url = BEEF_API + 'item?name=' + searchData.itemName + "&"
  if (searchData.jobLevel !== 0) {
    url += 'level=' + searchData.jobLevel + '&'
  }
  if (searchData.jobAbbreviation !== '') {
    url += 'job=' + searchData.jobAbbreviation + '&'
  }

  url += 'page=' + page
  return getResponseByGet(url)
}

export const getMarketableItemByName = async (itemName: String, page = 1) => {
  const url = BEEF_API + 'item/marketable/name/' + itemName + '/page/' + page
  return await getResponseByGet(url)
}

export const getTradableItemBySearchData = async (searchData: SearchDataType, page = 1) => {
  const {itemName, jobAbbreviation, jobLevel} = searchData

  if (itemName !== '' && jobAbbreviation !== '') {
    const url = BEEF_API + 'item/marketable/name/' + itemName + '/job/' + jobAbbreviation + '/level/' + jobLevel + '/page/' + page
    return await getResponseByGet(url)
  } else if (itemName !== '' && jobAbbreviation === '') {
    const url = BEEF_API + 'item/marketable/name/' + itemName + '/level/' + jobLevel + '/page/' + page
    return await getResponseByGet(url)
  } else if (itemName === '' && jobAbbreviation !== '') {
    const url = BEEF_API + 'item/marketable/job/' + jobAbbreviation + '/level/' + jobLevel + '/page/' + page
    return await getResponseByGet(url)
  } else {
    const url = BEEF_API + 'item/marketable/level/' + jobLevel + '/page/' + page
    return await getResponseByGet(url)
  }
}