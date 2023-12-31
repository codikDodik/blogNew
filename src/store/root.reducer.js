import { combineReducers } from 'redux'

import { getPostsListReducer } from '../store/reducers/postList'
import { changePageReducer } from '../store/reducers/pagination.reducer'
import { getPostReducer } from '../store/reducers/getPost.reducer'
import { formReducer } from '../store/reducers/registration.reducer'
import { usersData } from '../store/reducers/usersData.reducer'
import { updateUserReducer } from '../store/reducers/updateUser.reducer'
import { createPostReducer } from '../store/reducers/createPost.reducer'
import { deletePostReducer } from '../store/reducers/deletePost.reducer'
import { getLikesReducer } from '../store/reducers/getLikes.reducer'

const rootReducer = combineReducers({
  getPostsListReducer,
  changePageReducer,
  getPostReducer,
  formReducer,
  usersData,
  updateUserReducer,
  createPostReducer,
  deletePostReducer,
  getLikesReducer,
})

export default rootReducer
