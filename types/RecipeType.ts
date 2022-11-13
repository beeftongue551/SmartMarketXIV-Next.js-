export type RawRecipeType = {
  id: number
  craftType: string
  recipeLevel: number
  secretRecipeBook: string
  resultId: number
  itemResult: string
  amountResult: number
  itemIngredientId: number[]
  itemIngredient: string[]
  amountIngredient: string[]
}

export type IngredientType = {
  itemId: number,
  itemName: string,
  itemIcon: string,
  amount: number
  gill: number,
  gillTotal: number,
}

export type RecipeType = {
  id: number,
  itemName: string,
  itemIcon: string,
  amount: number,
  craftType: string,
  ingredients: IngredientType[]
  gillParOne: number,
  totalGill: number
}