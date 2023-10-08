import { DELETE_POST } from '../reducers/deletePost.reducer'

export const deletePostAction = (slug) => {
  return {
    type: DELETE_POST,
    slug,
  }
}
