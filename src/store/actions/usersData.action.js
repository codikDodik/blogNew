import { GET_DATA_USER } from '../reducers/usersData.reducer'

export const usersDataAction = (token, username, email, image) => {
  return {
    type: GET_DATA_USER,
    token,
    email,
    username,
    image,
  }
}
