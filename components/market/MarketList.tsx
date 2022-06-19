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

const MarketList: NextPage<ListData> = (props) => {

  const [recipeData, setRecipeData] = useState<RecipeType>({
    amount: 0, gillParOne: 0, id: 0, ingredients: [], itemIcon: "", itemName: "", job: "", jobIcon: "", totalGill: 0
  })

  const searchData = props.searchData || {
    isDetail: false,
    itemName: '',
    dataCenter: '',
    jobAbbreviation: undefined,
    jobLevel: undefined
  }

  const itemsData: ItemDataDetailType[] = props.itemsData || []

  const listItems = (
    itemsData.map((itemData) =>
      <MarketExpansionBar market={itemData.marketData}
                          item={itemData.item}
                          key={itemData.item.id}
                          dataCenter={searchData.dataCenter}
                          setRecipeData={setRecipeData}
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