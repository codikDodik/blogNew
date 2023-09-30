/* eslint-disable prettier/prettier */
/* eslint-disable indent */
export const GET_DATA_USER = 'GET_DATA_USER'
export const WRONG_USERS_DATA = 'WRONG_USERS_DATA'

const user = localStorage.user ? JSON.parse(localStorage.user) : false

const initialState = {
  token: user ? user.token : '',
  username: user ? user.username : '',
  email: user ? user.email : '',
  image: user.image ? user.image : '',
  error: null,
}

export const usersData = (state = initialState, action) => {
  console.log('user data', state)
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        token: action.token,
        username: action.username,
        email: action.email,
        image: action.image ? action.image : '',
        error: false,
      }
    case WRONG_USERS_DATA:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}
