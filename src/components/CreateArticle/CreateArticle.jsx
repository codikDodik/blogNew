import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import classes from './CreateArticle.module.scss'

const CreateArticle = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const [tags, setTags] = useState([])
  const [tagError, setTagError] = useState(null)
  const onSubmit = (data) => {
    console.log(data)
  }

  const handleAddTag = () => {
    const tagInputValue = document.getElementById('tag').value.trim()

    if (!tagInputValue) {
      setTagError('Tag cannot be empty')
      return
    }

    setTagError(null)

    setTags([...tags, tagInputValue])

    document.getElementById('tag').value = ''
  }

  const handleRemoveTag = (index) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  return (
    <div className={classes.CreateArticle}>
      <div className={classes.CreateArticle__wrapper}>
        <span className={classes.CreateArticle__caption}>Create new article</span>
        <form className={classes.CreateArticle__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.CreateArticle__container}>
            <label htmlFor="title">
              <span className={classes.CreateArticle__label}>Title</span>
            </label>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              rules={{ required: 'Title is required' }}
              render={({ field }) => (
                <input placeholder="Title" className={classes.CreateArticle__input} type="text" id="title" {...field} />
              )}
            />
            {errors.title && <p className={classes.CreateArticle__errorText}>{errors.title.message}</p>}
          </div>

          <div className={classes.CreateArticle__container}>
            <label htmlFor="description">
              <span className={classes.CreateArticle__label}>Short description</span>
            </label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: 'The short description field cannot be empty.' }}
              render={({ field }) => (
                <input
                  placeholder="Short description"
                  className={classes.CreateArticle__input}
                  type="text"
                  id="description"
                  {...field}
                />
              )}
            />
            {errors.description && <p className={classes.CreateArticle__errorText}>{errors.description.message}</p>}
          </div>

          <div className={classes.CreateArticle__container}>
            <label htmlFor="articleText">
              <span className={classes.CreateArticle__label}>Text</span>
            </label>
            <Controller
              name="articleText"
              control={control}
              defaultValue=""
              rules={{ required: 'The text field cannot be empty' }}
              render={({ field }) => (
                <textarea
                  className={classes.CreateArticle__input_mainContent}
                  placeholder="Text"
                  id="articleText"
                  {...field}
                />
              )}
            />
            {errors.articleText && <p className={classes.CreateArticle__errorText}>{errors.articleText.message}</p>}
          </div>
          <div className={classes.CreateArticle__tagsList}>
            <div className={classes.CreateArticle__tagItem}>
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
                <button className={classes.CreateArticle__createTag_deleteButton} type="button">
                  Delete
                </button>
                <button className={classes.CreateArticle__createTag_createButton} onClick={handleAddTag} type="button">
                  Add tag
                </button>
              </div>
              {tagError && <p className={classes.CreateArticle__errorText}>{tagError}</p>}
            </div>
            {tags.map((tag, index) => (
              <div className={classes.CreateArticle__tagItem} key={index}>
                <input
                  className={classes.CreateArticle__createTag_input}
                  type="text"
                  id="tag"
                  name={`tag-${index}`}
                  value={tag}
                  onChange={(e) => {
                    const newTags = [...tags]
                    newTags[index] = e.target.value
                    setTags(newTags)
                  }}
                />
                <button
                  className={classes.CreateArticle__createTag_deleteButton}
                  type="button"
                  onClick={() => handleRemoveTag(index)}
                >
                  Delete
                </button>
              </div>
            ))}
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
