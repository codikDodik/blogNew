/* eslint-disable no-unused-vars */
export const authoriztionUsers = (data) => {
  return (dispatch) => {
    console.log('data', data)
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
          console.log(user)
        } else {
          console.log('authorizaiton error')
        }
      })
  }
}
