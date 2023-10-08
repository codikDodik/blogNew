/* eslint-disable indent */

export const DELETE_POST = 'DELETE_POST'

const initialState = {
  deletePost: false,
}

export const deletePostReducer = (state = initialState, action) => {
  console.log(state, action, 'delete post')
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        deletePost: true,
      }
    default:
      return state
  }
}
