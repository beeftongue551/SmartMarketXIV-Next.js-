import {NewsDataType} from "../../types/NewsDataType";
import {BEEF_API} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";

export const getNewsListLimit = async (cases: number): Promise<NewsDataType[]> => {
  const url = BEEF_API + 'news?cases=' + cases
  return await getResponseByGet(url)
}