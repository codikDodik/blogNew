/* eslint-disable no-unused-vars */
import { usersDataAction } from '../store/actions/usersData.action'
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
        } else {
          console.log('authorizaiton error')
        }
      })
  }
}
