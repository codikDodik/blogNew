import React from 'react'

import classes from './CreateArticle.module.scss'
const CreateArticle = () => {
  return (
    <div className={classes.CreateArticle}>
      <div className={classes.CreateArticle__wrapper}>
        <span className={classes.CreateArticle__caption}>Create new article</span>
        <form className={classes.CreateArticle__form}>
          <div className={classes.CreateArticle__container}>
            <label htmlFor="title">
              <span className={classes.CreateArticle__label}>Title</span>
            </label>
            <input
              placeholder="Title"
              className={classes.CreateArticle__input}
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div className={classes.CreateArticle__container}>
            <label htmlFor="description">
              <span className={classes.CreateArticle__label}>Short description</span>
            </label>
            <input
              className={classes.CreateArticle__input}
              placeholder="Title"
              type="text"
              id="description"
              name="description"
              required
            />
          </div>
          <div className={classes.CreateArticle__container}>
            <label htmlFor="article text">
              <span className={classes.CreateArticle__label}>Text</span>
            </label>
            <textarea
              className={classes.CreateArticle__input_mainContent}
              placeholder="Title"
              type="text"
              id="article text"
              name="article text"
              required
            />
          </div>
          <div className={classes.CreateArticle__container}>
            <label htmlFor="tag">
              <span className={classes.CreateArticle__label}>Tags</span>
            </label>
            <div className={classes.CreateArticle__createTag}>
              <input
                className={classes.CreateArticle__createTag_input}
                placeholder="Tag"
                type="text"
                id="tag"
                name="tag"
              />
              <button className={classes.CreateArticle__createTag_deleteButton}>Delete</button>
            </div>
            <div className={classes.CreateArticle__createTag}>
              <input
                className={classes.CreateArticle__createTag_input}
                placeholder="Tag"
                type="text"
                id="tag"
                name="tag"
              />
              <button className={classes.CreateArticle__createTag_deleteButton}>Delete</button>
              <button className={classes.CreateArticle__createTag_createButton}>Add tag</button>
            </div>
          </div>
          <button className={classes.CreateArticle__button} type="submit">
            <span className={classes.CreateArticle__buttonText}>Send</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateArticle
