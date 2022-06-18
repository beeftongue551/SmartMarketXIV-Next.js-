import {BEEF_API} from "../../constants/constants";
import {getResponseByGet} from "../../utils/urlUtils";
import {RawRecipeType} from "../../types/RecipeType";

export const getRecipeByRecipeId = async (recipeId: number): Promise<RawRecipeType> => {
  const url = BEEF_API + 'recipe/id/' + recipeId
  return await getResponseByGet(url)
}