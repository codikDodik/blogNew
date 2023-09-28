import React from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import profileImage from '../../../assets/img/profile1.svg'

import classes from './UsersHeader.module.scss'

const UsersHeader = () => {
  // const user = useSelector((state) => {
  //   const { username, image } = state.usersData
  //   return username, image
  // })
  // console.log('users data', user)
  const user = JSON.parse(localStorage.user)
  console.log(user)
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }
  return (
    <div className={classes.UsersHeader}>
      <div className={classes.UsersHeader__name}>
        <Link to="/">
          <span className={classes.UsersHeader__nameWrapper}>Realworld Blog</span>
        </Link>
      </div>
      <div className={classes.UsersHeader__buttons}>
        <Link to="/new-article">
          <button className={classes.UsersHeader__createButton}>Create article</button>
        </Link>
        <Link to="/profile">
          <div className={classes.UsersHeader__username}>{user.username}</div>
        </Link>
        <Link to="/profile">
          <button className={classes.UsersHeader__signUpButton}>
            {' '}
            <img
              src={user.image ? user.image : profileImage}
              alt="Profile"
              className={classes.UsersHeader__profileImage}
            />
          </button>
        </Link>
        <button className={classes.UsersHeader__logOutButton} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default UsersHeader
