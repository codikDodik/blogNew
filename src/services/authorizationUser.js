/* eslint-disable no-unused-vars */
import { usersDataAction, wrongUsersDataAction } from '../store/actions/usersData.action'
import { usersAuthorizationUpdate } from '../store/actions/updateUser.action'

export const authoriztionUsers = (data) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: data.email,
          password: data.password,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          const { user } = data
          localStorage.user = JSON.stringify(user)
          dispatch(usersDataAction(user.token, user.username, user.email, user.password))
          dispatch(usersAuthorizationUpdate(user.token, user.username, user.email))
        } else {
          dispatch(wrongUsersDataAction())
        }
      })
  }
}
