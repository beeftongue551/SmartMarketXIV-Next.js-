import {NextPage} from "next";
import {PaginationType} from "../../types/PaginationType";
import {SearchDataType} from "../../types/SearchDataType";
import {Pagination} from "react-bootstrap";
import {searchEvent} from "../../utils/SearchUtils";
import {ItemDataDetailType} from "../../types/ItemDataType";

type PaginationProps = {
  paginationData?: PaginationType
  searchData?: SearchDataType
  updateEvent: Function
}

const BeefPagination: NextPage<PaginationProps> = (props: PaginationProps):JSX.Element => {
  const {paginationData, searchData} = props

  /**
   * ページ番号クリック時にアイテム検索を行いその結果を親コンポーネントに渡す
   *
   * @param page ページ番号
   */
  const pageClickEvent = async (page: number) => {
    if (searchData !== undefined) {
      const itemData = await searchEvent(searchData, page)

      const tradableItems: ItemDataDetailType[] | undefined = itemData?.tradableItem
      const pagination: PaginationType = itemData?.pagination

      props.updateEvent(tradableItems, pagination, searchData)
    }
  }

  /**
   * 検索結果のページ数と表示ページに応じたJSX.Elementを生成する
   * 検索結果10件以内の場合は全ページを表示し
   * 10件より多い場合は表示ページに応じたページを表示する
   */
  const pageItem = ():JSX.Element[] => {
    const items:JSX.Element[] = []
    if(paginationData !== undefined) {
      if (paginationData.pageTotal < 10) {
        for (let index = 1; index <= paginationData.pageTotal; index++) {
          items.push(
            <Pagination.Item key={index} active={index === paginationData.page} onClick={() => pageClickEvent(index)}>
              {index}
            </Pagination.Item>
          )
        }
      } else {
        if (paginationData.page < 4) {
          for (let index = 1; index <= paginationData.page + 2; index++) {
            items.push(
              <Pagination.Item key={index} active={index === paginationData.page} onClick={() => pageClickEvent(index)}>
                {index}
              </Pagination.Item>
            )
          }
          items.push(
            <Pagination.Item key="･･･" disabled>
              ･･･
            </Pagination.Item>
          )
          items.push(
            <Pagination.Item
              key="paginationData.pageTotal"
              active={paginationData.page === paginationData.pageTotal}
              onClick={() => pageClickEvent(paginationData.pageTotal)}
            >
              {paginationData.pageTotal}
            </Pagination.Item>
          )
        } else if (paginationData.pageTotal - 4 < paginationData.page) {
          items.push(
            <Pagination.Item
              key="1"
              active={paginationData.page === 1}
              onClick={() => pageClickEvent(1)}
            >
              1
            </Pagination.Item>
          )
          items.push(
            <Pagination.Item key="forward" disabled>
              ･･･
            </Pagination.Item>
          )
          for (let index = paginationData.page - 2; index <= paginationData.pageTotal; index++) {
            items.push(
              <Pagination.Item key={index} active={index === paginationData.page} onClick={() => pageClickEvent(index)}>
                {index}
              </Pagination.Item>
            )
          }
        } else {
          items.push(
            <Pagination.Item
              key="1"
              active={paginationData.page === 1}
              onClick={() => pageClickEvent(1)}
            >
              1
            </Pagination.Item>
          )
          items.push(
            <Pagination.Item key="forward" disabled>
              ･･･
            </Pagination.Item>
          )
          for (let index = paginationData.page - 2; index <= paginationData.page + 2; index++) {
            items.push(
              <Pagination.Item key={index} active={index === paginationData.page} onClick={() => pageClickEvent(index)}>
                {index}
              </Pagination.Item>
            )
          }
          items.push(
            <Pagination.Item key="back" disabled>
              ･･･
            </Pagination.Item>
          )
          items.push(
            <Pagination.Item
              key="paginationData.pageTotal"
              active={paginationData.page === paginationData.pageTotal}
              onClick={() => pageClickEvent(paginationData.pageTotal)}
            >
              {paginationData.pageTotal}
            </Pagination.Item>
          )
        }
      }
    }
    return items
  }


  return (
    <div className="mx-auto">
      <Pagination>{pageItem()}</Pagination>
    </div>
  )
}

export default BeefPagination