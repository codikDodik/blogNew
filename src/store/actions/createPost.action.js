import { SET_DESCRIPTION, SET_TAG, SET_TEXT, SET_TITLE } from '../reducers/createPost.reducer'

export const setPostDescription = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  }
}
export const setPostTag = (tag) => {
  return {
    type: SET_TAG,
    tag,
  }
}
export const setPostText = (text) => {
  return {
    type: SET_TEXT,
    text,
  }
}
export const setPostTitle = (title) => {
  return {
    type: SET_TITLE,
    title,
  }
}
