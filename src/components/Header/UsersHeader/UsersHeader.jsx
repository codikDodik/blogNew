import React from 'react'

import profileImage from '../../../assets/img/profile1.svg'

import classes from './UsersHeader.module.scss'

const UsersHeader = () => {
  return (
    <div className={classes.UsersHeader}>
      <div className={classes.UsersHeader__name}>Realworld Blog</div>
      <div className={classes.UsersHeader__buttons}>
        <button className={classes.UsersHeader__createButton}>Create article</button>
        <div className={classes.UsersHeader__username}>John Doe</div>
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
