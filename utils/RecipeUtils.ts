import {getRecipeByRecipeId} from "../api/beef/RecipeApi";
import {IngredientType, RawRecipeType, RecipeType} from "../types/RecipeType";
import {getItemByItemId} from "../api/beef/ItemApi";
import {getMarketByIDs} from "../api/universalis/MarketApi";

/**
 * APIからレシピ情報、アイテム情報の取得を行い、RecipeType型に変更を行う
 *
 * @see RecipeType
 * @param recipeId レシピID
 * @param dataCenter データセンタ
 */
export const getRecipe = async (recipeId: number, dataCenter: string): Promise<RecipeType> => {
  const rawRecipeData = await getRecipeByRecipeId(recipeId)
  const recipeData: RecipeType = <RecipeType>{}
  const itemData = await getItemByItemId(rawRecipeData.itemId)

  recipeData.itemName = itemData.itemName
  recipeData.itemIcon = itemData.itemIcon
  recipeData.amount = rawRecipeData.amountResult
  recipeData.job = rawRecipeData.job
  recipeData.jobIcon = rawRecipeData.jobIcon

  const ingredientIds: number[] = []
  recipeData.ingredients = []

  for (let i = 0; i < 10; i++) {
    const ingredient: IngredientType = await generatedIngredient(rawRecipeData, i)
    if (ingredient.itemId !== 0) {
      ingredientIds.push(ingredient.itemId)
      recipeData.ingredients.push(ingredient)
    }
  }

  const ingredientsMarketData = await getMarketByIDs(ingredientIds, dataCenter)
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
    amount: 0, gillParOne: 0, id: 0, ingredients: [], itemIcon: "", itemName: "", job: "", jobIcon: "", totalGill: 0
  }
}

/**
 * APIから取得した素材情報の生データから素材情報の整理を行う
 *
 * @param rawData 素材情報の生データ
 * @param index インデックス番号
 */
const generatedIngredient = async (rawData: RawRecipeType, index: number): Promise<IngredientType> => {
  const ingredient: IngredientType = <IngredientType>{}

  switch (index) {
    case 0:
      ingredient.itemId = rawData.ingredient0
      ingredient.amount = rawData.amountIngredient0
      break
    case 1:
      ingredient.itemId = rawData.ingredient1
      ingredient.amount = rawData.amountIngredient1
      break
    case 2:
      ingredient.itemId = rawData.ingredient2
      ingredient.amount = rawData.amountIngredient2
      break
    case 3:
      ingredient.itemId = rawData.ingredient3
      ingredient.amount = rawData.amountIngredient3
      break
    case 4:
      ingredient.itemId = rawData.ingredient4
      ingredient.amount = rawData.amountIngredient4
      break
    case 5:
      ingredient.itemId = rawData.ingredient5
      ingredient.amount = rawData.amountIngredient5
      break
    case 6:
      ingredient.itemId = rawData.ingredient6
      ingredient.amount = rawData.amountIngredient6
      break
    case 7:
      ingredient.itemId = rawData.ingredient7
      ingredient.amount = rawData.amountIngredient7
      break
    case 8:
      ingredient.itemId = rawData.ingredient8
      ingredient.amount = rawData.amountIngredient8
      break
    case 9:
      ingredient.itemId = rawData.ingredient9
      ingredient.amount = rawData.amountIngredient9
      break
  }

  if(ingredient.itemId === 0) {
    ingredient.itemName = ''
    ingredient.itemIcon = ''
  } else {
    const ingredientItemData = await getItemByItemId(ingredient.itemId)
    ingredient.itemName = ingredientItemData.itemName
    ingredient.itemIcon = ingredientItemData.itemIcon
  }
  return ingredient
}