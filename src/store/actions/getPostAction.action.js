import { GET_POST } from '../../store/reducers/getPost.reducer'

export const getPostAction = (article) => {
  return {
    type: GET_POST,
    article,
  }
}
