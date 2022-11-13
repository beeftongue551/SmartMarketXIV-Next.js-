import {NextPage} from "next";
import {ItemDataDetailType} from "../../types/ItemDataType";
import {PaginationType} from "../../types/PaginationType";
import {SearchDataType} from "../../types/SearchDataType";
import MarketExpansionBar from "./MarketExpantionBar";
import {useState} from "react";
import RecipeCard from "../recipe/RecipeCard";
import {RecipeType} from "../../types/RecipeType";
import {Stack} from "react-bootstrap";

type ListData = {
  itemsData?: ItemDataDetailType[],
  pagination?: PaginationType,
  searchData?: SearchDataType
}

const MarketList: NextPage<ListData> = (props: ListData): JSX.Element => {

  const [recipeData, setRecipeData] = useState<RecipeType>({
    amount: 0, gillParOne: 0, id: 0, ingredients: [], itemIcon: "", itemName: "", craftType: "", totalGill: 0
  })

  const searchData = props.searchData || {
    isDetail: false,
    itemName: '',
    dataCenter: '',
    jobAbbreviation: undefined,
    jobLevel: undefined
  }

  const itemsData: ItemDataDetailType[] = props.itemsData || []

  const listItems: JSX.Element[] = (
    itemsData.map((itemData: ItemDataDetailType) =>
      <MarketExpansionBar market={itemData.marketData}
                          item={itemData.item}
                          dataCenter={searchData.dataCenter}
                          setRecipeData={setRecipeData}
                          key={itemData.item.itemId}
      />
    )
  )

 return(
   <div>
     <Stack gap={2}>
       <RecipeCard recipeData={recipeData} setRecipeData={setRecipeData}/>
       {listItems}
    </Stack>
   </div>
 )
}

export default MarketList