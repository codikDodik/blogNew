import { combineReducers } from 'redux'

import { getPostsListReducer } from '../store/reducers/postList'
import { changePageReducer } from '../store/reducers/pagination.reducer'
import { getPostReducer } from '../store/reducers/getPost.reducer'

const rootReducer = combineReducers({
  getPostsListReducer,
  changePageReducer,
  getPostReducer,
})

export default rootReducer
