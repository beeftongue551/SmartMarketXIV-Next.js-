import {getRecipeByRecipeId} from "../api/beef/RecipeApi";
import {IngredientType, RawRecipeType, RecipeType} from "../types/RecipeType";
import {getItemByItemId} from "../api/beef/ItemApi";
import {getMarketByID, getMarketByIDs} from "../api/universalis/MarketApi";

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
  recipeData.ingredients = await makeIngredients(rawRecipeData)

  recipeData.totalGill = 0
  for (let i = 0; i < recipeData.ingredients.length; i++) {
    if(recipeData.ingredients[i].itemId != null){
      const marketData = await getMarketByID(recipeData.ingredients[i].itemId, dataCenter)
      recipeData.ingredients[i].gill = Math.floor(marketData.minPrice * recipeData.ingredients[i].amount)
      recipeData.ingredients[i].gillTotal = recipeData.ingredients[i].gill
      recipeData.totalGill += recipeData.ingredients[i].gillTotal
    }
  }

  recipeData.gillParOne = Math.floor(recipeData.totalGill / recipeData.amount)

  return recipeData
}

export const makeIngredients = async (rawRecipeData: RawRecipeType) => {
  const ingredients: IngredientType[] = []
  for (let i = 0; i < rawRecipeData.itemIngredientId.length; i++) {
    if(rawRecipeData.itemIngredientId[i] != null){
      const itemData = await getItemByItemId(rawRecipeData.itemIngredientId[i])
      ingredients.push({
        amount: Number(rawRecipeData.amountIngredient[i]), gill: 0, gillTotal: 0, itemIcon: itemData.itemIcon, itemId: rawRecipeData.itemIngredientId[i], itemName: itemData.itemName})
    }
  }
  return ingredients
}

/**
 * レシピデータの初期化を行う
 */
export const resetRecipeData = ():RecipeType => {
  return {
    amount: 0, gillParOne: 0, id: 0, ingredients: [], itemIcon: "", itemName: "", craftType: "", totalGill: 0
  }
}