import React from 'react'

import likeButton from '../../assets/img/LIkeButton.svg'

import classes from './ArticleInfo.module.scss'
const ArticleInfo = ({ data }) => {
  const { description, title, author, tagList, favoritesCount } = data
  const renderTags = () => {
    return tagList
      .filter((tag) => tag !== null && tag.trim() !== '')
      .map((tag, index) => (
        <li key={index} className={classes.ArticleInfo__tagItem}>
          {tag}
        </li>
      ))
  }
  return (
    <div className={classes.ArticleInfo}>
      <div className={classes.ArticleInfo__info}>
        <div className={classes.ArticleInfo__wrapper}>
          <div className={classes.ArticleInfo__title}>{title}</div>
          <button className={classes.ArticleInfo__likes} type="button">
            <img src={likeButton} alt="Likes" />
          </button>
          <span className={classes.ArticleInfo__likesAmount}>{favoritesCount}</span>
        </div>
        <ul className={classes.ArticleInfo__tags}>{renderTags()}</ul>
        <p className={classes.ArticleInfo__text}>{description}</p>
      </div>
      <div className={classes.ArticleInfo__account}>
        <div className={classes.ArticleInfo__accountTextInfo}>
          <div className={classes.ArticleInfo__autorsLogin}>{author.username}</div>
          <div className={classes.ArticleInfo__date}>March 5, 2020 </div>
        </div>
        <img className={classes.ArticleInfo__image} src={author.image} alt="ProfileImage" />
      </div>
    </div>
  )
}

export { ArticleInfo }
