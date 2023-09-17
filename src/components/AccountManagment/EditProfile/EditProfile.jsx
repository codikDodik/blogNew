import React from 'react'

import classes from './EditProfile.module.scss'
const EditProfile = () => {
  return (
    <div className={classes.SignIn}>
      <div className={classes.SignIn__wrapper}>
        <span className={classes.SignIn__caption}>Edit Profile</span>
        <form className={classes.SignIn__form}>
          <div className={classes.SignIn__container}>
            <label htmlFor="username">
              <span className={classes.SignIn__label}>Username</span>
            </label>
            <input placeholder="Username" className={classes.SignIn__input} type="text" id="username" name="username" />
          </div>
          <div className={classes.SignIn__container}>
            <label htmlFor="email">
              <span className={classes.SignIn__label}>Email address</span>
            </label>
            <input placeholder="Email address" className={classes.SignIn__input} type="text" id="email" name="email" />
          </div>
          <div className={classes.SignIn__container}>
            <label htmlFor="Password">
              <span className={classes.SignIn__label}>New password</span>
            </label>
            <input className={classes.SignIn__input} placeholder="Password" type="text" id="Password" name="Password" />
          </div>
          <div className={classes.SignIn__container}>
            <label htmlFor="Avatar image">
              <span className={classes.SignIn__label}>Avatar image (url)</span>
            </label>
            <input
              className={classes.SignIn__input}
              placeholder="Avatar image"
              type="text"
              id="Avatar image"
              name="Avatar image"
            />
          </div>
          <button className={classes.SignIn__button} type="submit">
            <span className={classes.SignIn__buttonText}>Save</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
