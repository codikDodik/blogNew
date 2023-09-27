import React from 'react'
// import { useSelector } from 'react-redux'

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
  return (
    <div className={classes.UsersHeader}>
      <div className={classes.UsersHeader__name}>Realworld Blog</div>
      <div className={classes.UsersHeader__buttons}>
        <button className={classes.UsersHeader__createButton}>Create article</button>
        <div className={classes.UsersHeader__username}>{user.username}</div>
        <button className={classes.UsersHeader__signUpButton}>
          {' '}
          <img src={profileImage} alt="Profile" className={classes.UsersHeader__profileImage} />
        </button>
        <button className={classes.UsersHeader__logOutButton}>Log Out</button>
      </div>
    </div>
  )
}

export default UsersHeader
