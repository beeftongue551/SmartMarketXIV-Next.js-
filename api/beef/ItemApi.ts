import {BEEF_API} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";
import {SearchDataType} from "../../types/SearchDataType";

export const getItemByItemId = async (itemId: number) => {
  const url = BEEF_API + 'item/id/' + itemId
  return await getResponseByGet(url)
}

export const getTrebleItemByName = async (itemName: String, page = 1) => {
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