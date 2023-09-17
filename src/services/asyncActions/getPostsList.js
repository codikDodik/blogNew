export const GET_POSTS = 'GET_POSTS'

export function fetchGetPostsList(limit = 5, offset = 0) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://blog.kata.academy/api/articles?limit=${limit}&offset=${offset}`)
      const jsonData = await response.json()
      dispatch({
        type: GET_POSTS,
        data: jsonData,
      })
    } catch (error) {
      console.log('api error')
    }
  }
}
