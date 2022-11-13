import {getRecipeByRecipeId} from "../api/beef/RecipeApi";
import {RecipeType} from "../types/RecipeType";
import {getItemByItemId} from "../api/beef/ItemApi";
import {getMarketByIDs} from "../api/universalis/MarketApi";

/**
 * APIからレシピ情報、アイテム情報の取得を行い、RecipeType型に変更を行う
 *
 * @see RecipeType
 * @param itemId 完成品のアイテムID
 * @param recipeId レシピID
 * @param dataCenter データセンタ
 */
export const getRecipe = async (itemId: number, recipeId: number, dataCenter: string): Promise<RecipeType> => {
  const rawRecipeData = await getRecipeByRecipeId(itemId, recipeId)
  const recipeData: RecipeType = <RecipeType>{}
  const itemData = await getItemByItemId(rawRecipeData.resultId)

  recipeData.itemName = itemData.itemName
  recipeData.itemIcon = itemData.itemIcon
  recipeData.amount = rawRecipeData.amountResult
  recipeData.craftType = rawRecipeData.craftType
  recipeData.ingredients = []

  const ingredientsMarketData = await getMarketByIDs(rawRecipeData.itemIngredientId, dataCenter)
  recipeData.totalGill = 0
  for (let i = 0; i < recipeData.ingredients.length; i++) {
    recipeData.ingredients[i].gill =
      ingredientsMarketData.items[recipeData.ingredients[i].itemId].minPrice *
      recipeData.ingredients[i].amount
    recipeData.ingredients[i].gillTotal = recipeData.ingredients[i].gill
    recipeData.totalGill += recipeData.ingredients[i].gillTotal
  }

  recipeData.gillParOne = recipeData.totalGill / recipeData.amount

  return recipeData
}

/**
 * レシピデータの初期化を行う
 */
export const resetRecipeData = ():RecipeType => {
  return {
    amount: 0, gillParOne: 0, id: 0, ingredients: [], itemIcon: "", itemName: "", craftType: "", totalGill: 0
  }
}