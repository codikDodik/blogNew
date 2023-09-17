import React from 'react'
import ReactMarkdown from 'react-markdown'

import likeButton from '../../assets/img/LIkeButton.svg'
import profile from '../../assets/img/profile1.svg'

import classes from './SingleArticle.module.scss'
const SingleArticle = () => {
  const markdownContent = `
# Заголовок 1
## Заголовок 2
### Заголовок 3
*Курсив*
**Жирный**
***Жирный и курсив***
`
  return (
    <div className={classes.SingleArticle}>
      <div className={classes.SingleArticle__container}>
        <div className={classes.SingleArticle__info}>
          <div className={classes.SingleArticle__wrapper}>
            <div className={classes.SingleArticle__title}>Some article title</div>
            <button className={classes.SingleArticle__likes} type="button">
              <img src={likeButton} alt="Likes" />
            </button>
            <span className={classes.SingleArticle__likesAmount}>12</span>
          </div>
          <ul className={classes.SingleArticle__tags}>
            <li className={classes.SingleArticle__tagItem}>тег</li>
            <li className={classes.SingleArticle__tagItem}>тег</li>
            <li className={classes.SingleArticle__tagItem}>тег</li>
          </ul>
          <p className={classes.SingleArticle__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.{' '}
          </p>
        </div>
        <div className={classes.SingleArticle__account}>
          <div className={classes.SingleArticle__accountTextInfo}>
            <div className={classes.SingleArticle__autorsLogin}>John Doe</div>
            <div className={classes.SingleArticle__date}>March 5, 2020 </div>
          </div>
          <img className={classes.SingleArticle__image} src={profile} alt="ProfileImage" />
        </div>
      </div>
      <div className={classes.SingleArticle__mainTextContent}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  )
}

export default SingleArticle
