import { GET_DATA_USER, WRONG_USERS_DATA } from '../reducers/usersData.reducer'

export const usersDataAction = (token, username, email, image) => {
  return {
    type: GET_DATA_USER,
    token,
    email,
    username,
    image,
  }
}

export const wrongUsersDataAction = () => {
  return {
    type: WRONG_USERS_DATA,
  }
}
