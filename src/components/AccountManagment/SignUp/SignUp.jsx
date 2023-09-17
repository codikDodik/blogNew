import React from 'react'

import classes from './SignUp.module.scss'
const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      <div className={classes.SignUp__wrapper}>
        <span className={classes.SignUp__caption}>Create new account</span>
        <form className={classes.SignUp__form}>
          <div className={classes.SignUp__container}>
            <label htmlFor="username">
              <span className={classes.SignUp__label}>Username</span>
            </label>
            <input
              className={classes.SignUp__input}
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className={classes.SignUp__container}>
            <label htmlFor="email">
              <span className={classes.SignUp__label}>Email address</span>
            </label>
            <input
              placeholder="Email address"
              className={classes.SignUp__input}
              type="text"
              id="email"
              name="username"
              required
            />
          </div>
          <div className={classes.SignUp__container}>
            <label htmlFor="Password">
              <span className={classes.SignUp__label}>Password</span>
            </label>
            <input
              className={classes.SignUp__input}
              placeholder="Password"
              type="text"
              id="Password"
              name="username"
              required
            />
          </div>
          <div className={classes.SignUp__container}>
            <label htmlFor="RepeatPassword">
              <span className={classes.SignUp__label}>Repeat Password</span>
            </label>
            <input
              className={classes.SignUp__input}
              placeholder="Repeat Password"
              type="text"
              id="RepeatPassword"
              name="username"
              required
            />
          </div>
          <hr style={{ width: '320px', height: '1px', backgroundColor: '#E8E8E8' }} />
          <div className={classes.SignUp__agreement}>
            <label htmlFor="agreement">
              <input
                className={classes.SignUp__checkbox}
                name="agreement"
                type="checkbox"
                id="agreeCheckbox"
                value="agree"
              />
            </label>
            <span className={classes.SignUp__agreementText}>I agree to the processing of my personal information</span>
          </div>
          <button className={classes.SignUp__button} type="submit">
            <span className={classes.SignUp__buttonText}>Create</span>
          </button>
          <div className={classes.SignUp__footer}>
            <p>
              Already have an account?{' '}
              <a className={classes.SignUp__footerLink} href="/signin">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
