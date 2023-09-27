/* eslint-disable prettier/prettier */
export const GET_DATA_USER = 'GET_DATA_USER'

const user = localStorage.user ? JSON.parse(localStorage.user) : false

const initialState = {
  token: user ? user.token : '',
  username: user ? user.username : '',
  email: user ? user.email : '',
  image: user.image ? user.image : '',
}

export const usersData = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        token: action.token,
        username: action.username,
        email: action.email,
        image: action.image ? action.image : '',
      }
    default:
      return state
  }
}
