import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchGetPost } from '../../services/fetchGetPost'
import likeButton from '../../assets/img/LIkeButton.svg'

import classes from './SingleArticle.module.scss'
const SingleArticle = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(fetchGetPost(slug))
  }, [slug])

  const post = useSelector((store) => store.getPostReducer.article)
  const article = post ? post : null

  const generateTagList = (tagList) => {
    return tagList.map((tag, index) => (
      <li className={classes.SingleArticle__tagItem} key={index}>
        {tag}
      </li>
    ))
  }
  const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options)
    return formattedDate
  }

  return (
    <>
      {post && (
        <div className={classes.SingleArticle}>
          <div className={classes.SingleArticle__container}>
            <div className={classes.SingleArticle__info}>
              <div className={classes.SingleArticle__wrapper}>
                <div className={classes.SingleArticle__title}>{article.title}</div>
                <button className={classes.SingleArticle__likes} type="button">
                  <img src={likeButton} alt="Likes" />
                </button>
                <span className={classes.SingleArticle__likesAmount}>{article.favoritesCount}</span>
              </div>
              <ul className={classes.SingleArticle__tags}>{post && generateTagList(article.tagList)}</ul>
              <p className={classes.SingleArticle__description}>{article.description}</p>
            </div>
            <div className={classes.SingleArticle__account}>
              <div className={classes.SingleArticle__accountTextInfo}>
                <div className={classes.SingleArticle__autorsLogin}>{article.author.username}</div>
                <div className={classes.SingleArticle__date}>{formatDate(article.updatedAt)}</div>
              </div>
              <img className={classes.SingleArticle__image} src={article.author.image} alt="ProfileImage" />
            </div>
          </div>
          <div className={classes.SingleArticle__mainTextContent}>
            <ReactMarkdown>{article.body}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleArticle
