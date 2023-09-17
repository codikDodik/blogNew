import React from 'react'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__name}>Realworld Blog</div>
      <div className={classes.Header__signButtons}>
        <button className={classes.Header__signInButton}>Sign In</button>
        <button className={classes.Header__signUpButton}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
