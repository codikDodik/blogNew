import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { authoriztionUsers } from '../../../services/authorizationUser'

import classes from './SignIn.module.scss'
const SignIn = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    console.log('authorization', data)
    dispatch(authoriztionUsers(data))
  }

  return (
    <div className={classes.SignIn}>
      <div className={classes.SignIn__wrapper}>
        <span className={classes.SignIn__caption}>Sign In</span>
        <form className={classes.SignIn__form} onSubmit={handleSubmit(onSubmit)}>
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
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <p className={classes.SignIn__errorText}>{errors.email?.message}</p>
          </div>
          <div className={classes.SignIn__container}>
            <label htmlFor="password">
              <span className={classes.SignIn__label}>Password</span>
            </label>
            <input
              className={classes.SignIn__input}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
            <p className={classes.SignIn__errorText}>{errors.password?.message}</p>
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
