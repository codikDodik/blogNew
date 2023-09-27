/* eslint-disable no-unused-vars */
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
          }
          if (errors.email === 'is already taken.') {
            console.log('email error')
          }
        } else {
          console.log(data)
        }
      })
  }
}
