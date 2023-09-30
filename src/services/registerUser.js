/* eslint-disable no-unused-vars */
import { alreadyUsedEmail, alreadyUsedUsername } from '../store/actions/registration.action'
export const registerUser = (data) => {
  return (dispatch) => {
    fetch('https://blog.kata.academy/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: data.username,
          email: data.email,
          password: data.password,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          const { errors } = data
          if (errors.username === 'is already taken.') {
            console.log('username error')
            dispatch(alreadyUsedUsername())
          }
          if (errors.email === 'is already taken.') {
            console.log('email error')
            dispatch(alreadyUsedEmail())
          }
        } else {
          console.log(data)
        }
      })
  }
}
