import React from 'react'
import { Link } from 'react-router-dom'

import classes from './SignIn.module.scss'
const SignIn = () => {
  return (
    <div className={classes.SignIn}>
      <div className={classes.SignIn__wrapper}>
        <span className={classes.SignIn__caption}>Create new account</span>
        <form className={classes.SignIn__form}>
          <div className={classes.SignIn__container}>
            <label htmlFor="email">
              <span className={classes.SignIn__label}>Email address</span>
            </label>
            <input
              placeholder="Email address"
              className={classes.SignIn__input}
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={classes.SignIn__container}>
            <label htmlFor="password">
              <span className={classes.SignIn__label}>Password</span>
            </label>
            <input
              className={classes.SignIn__input}
              placeholder="Password"
              type="text"
              id="password"
              name="password"
              required
            />
          </div>
          <button className={classes.SignIn__button} type="submit">
            <span className={classes.SignIn__buttonText}>Login</span>
          </button>
          <div className={classes.SignIn__footer}>
            <p>
              Already have an account?{' '}
              <Link to="/sign-up">
                <span className={classes.SignIn__linkText}>Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
