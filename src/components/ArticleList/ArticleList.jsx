import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'

import { fetchGetPostsList } from '../../services/getPostsList'
import { ArticleInfo } from '../ArticleInfo/ArticleInfo'
import { changePageAction } from '../../store/actions/pagination.action'

import classes from './ArticleList.module.scss'

const ArticleList = () => {
  const articlesCount = useSelector((store) => store.getPostsListReducer.articlesCount)
  const articles = useSelector((store) => store.getPostsListReducer.articles)
  const page = useSelector((store) => store.changePageReducer.page)
  const limit = useSelector((store) => store.changePageReducer.limit)
  const offset = useSelector((store) => store.changePageReducer.offset)
  console.log(page)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetPostsList(limit, offset))
  }, [page])

  const changePage = (page) => {
    dispatch(changePageAction(page))
  }

  console.log(articles)
  return (
    <>
      <div className={classes.ArticleList}>
        <div className={classes.ArticleList__wrapper}>
          {articles.map((data, index) => {
            return <ArticleInfo key={index} data={data} />
          })}
        </div>

        <div className={classes.ArticleList__pagination}>
          <Pagination
            current={page}
            showSizeChanger={false}
            total={articlesCount}
            onChange={changePage}
            pageSize={limit}
          />
        </div>
      </div>
    </>
  )
}

export default ArticleList
