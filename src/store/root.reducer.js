import { combineReducers } from 'redux'

import { getPostsListReducer } from '../services/reducer/postList'
import { changePageReducer } from '../store/reducers/pagination.reducer'

const rootReducer = combineReducers({
  getPostsListReducer,
  changePageReducer,
})

export default rootReducer
