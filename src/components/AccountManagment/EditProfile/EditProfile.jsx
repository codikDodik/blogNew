import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

// import { updateUser } from '../../../services/updateUser'

import classes from './EditProfile.module.scss'

const EditProfile = () => {
  const defaultValues = useSelector((state) => {
    return state.usersData
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const [hasErrors, setHasErrors] = useState(false)

  const checkErrors = (data) => {
    const hasFormErrors = data.keys(errors).length > 0
    setHasErrors(hasFormErrors)
  }

  const onSubmit = (data) => {
    checkErrors
    console.log('Form data:', data)
  }

  return (
    <div className={classes.EditProfile}>
      <div className={classes.EditProfile__wrapper}>
        <span className={classes.EditProfile__caption}>Edit Profile</span>
        <form className={classes.EditProfile__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.EditProfile__container}>
            <label htmlFor="username">
              <span className={classes.EditProfile__label}>Username</span>
            </label>
            <input
              placeholder="Username"
              className={classes.EditProfile__input}
              type="text"
              id="username"
              name="username"
              {...register('username', {
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Username must be at most 20 characters',
                },
              })}
              defaultValue={defaultValues.username}
            />
            {errors.username && <p className={classes.EditProfile__errorText}>{errors.username.message}</p>}
          </div>
          <div className={classes.EditProfile__container}>
            <label htmlFor="email">
              <span className={classes.EditProfile__label}>Email address</span>
            </label>
            <input
              placeholder="Email address"
              className={classes.EditProfile__input}
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
              defaultValue={defaultValues.email}
            />
            {errors.email && <p className={classes.EditProfile__errorText}>{errors.email.message}</p>}
          </div>
          <div className={classes.EditProfile__container}>
            <label htmlFor="password">
              <span className={classes.EditProfile__label}>New password</span>
            </label>
            <input
              className={classes.EditProfile__input}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message:
                    'Password must be between 6 and 40 characters and contain at least one digit and one special character (!.@#$%^&*)',
                },
                maxLength: {
                  value: 40,
                  message:
                    'Password must be between 6 and 40 characters and contain at least one digit and one special character (!.@#$%^&*)',
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{6,40}$/,
                  message:
                    'Password must be between 6 and 40 characters and contain at least one digit and one special character (!.@#$%^&*)',
                },
              })}
            />
            {errors.password && <p className={classes.EditProfile__errorText}>{errors.password.message}</p>}
          </div>
          <div className={classes.EditProfile__container}>
            <label htmlFor="avatar-image">
              <span className={classes.EditProfile__label}>Avatar image (url)</span>
            </label>
            <input
              className={classes.EditProfile__input}
              placeholder="Avatar image"
              type="text"
              id="avatar-image"
              name="avatar-image"
              {...register('avatar-image', {
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: 'Invalid URL format',
                },
              })}
              defaultValue={defaultValues.image}
            />
            {errors['avatar-image'] && (
              <p className={classes.EditProfile__errorText}>{errors['avatar-image'].message}</p>
            )}
          </div>
          <button className={classes.EditProfile__button} type="submit" disabled={hasErrors}>
            <span className={classes.EditProfile__buttonText}>Save</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
