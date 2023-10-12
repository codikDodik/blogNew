import { deletePostAction } from '../store/actions/deletePost.action'

export const fetchDeletePost = (token, slug) => {
  return (dispatch) => {
    fetch(`https://blog.kata.academy/api/articles/${slug}`, {
      method: 'delete',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        dispatch(deletePostAction(slug))
      }
    })
  }
}
