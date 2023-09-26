import { combineReducers } from 'redux'

import { getPostsListReducer } from '../store/reducers/postList'
import { changePageReducer } from '../store/reducers/pagination.reducer'
import { getPostReducer } from '../store/reducers/getPost.reducer'
import { formReducer } from '../store/reducers/registration.reducer'

const rootReducer = combineReducers({
  getPostsListReducer,
  changePageReducer,
  getPostReducer,
  formReducer,
})

export default rootReducer
