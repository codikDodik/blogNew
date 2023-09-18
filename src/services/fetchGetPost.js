import { getPostAction } from '../store/actions/getPostAction.action'

export const fetchGetPost = (slug) => {
  return (dispatch) => {
    fetch(`https://blog.kata.academy/api/articles/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка API')
        }
        return res.json()
      })
      .then((data) => {
        dispatch(getPostAction(data))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
