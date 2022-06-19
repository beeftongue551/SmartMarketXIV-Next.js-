import {NewsDataType} from "../../types/NewsDataType";
import {BEEF_API} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";

export const getNewsListLimit = async (limit: number): Promise<NewsDataType[]> => {
  const url = BEEF_API + 'news/limit/' + limit
  return await getResponseByGet(url)
}