/* eslint-disable indent */
import { GET_POSTS } from '../asyncActions/getPostsList'

const initialState = {
  articles: [],
  articlesCount: 0,
}

const getPostsListReducer = (state = initialState, action) => {
  console.log('get post reducer', action)
  switch (action.type) {
    case GET_POSTS:
      return { ...action.data }
    default:
      return state
  }
}

export { getPostsListReducer }
