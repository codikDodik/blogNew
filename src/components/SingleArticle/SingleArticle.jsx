import ReactMarkdown from 'react-markdown'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Popconfirm, Alert, Spin } from 'antd'

import { fetchGetPost } from '../../services/fetchGetPost'
import { fetchDeletePost } from '../../services/deletePost'
import likeButton from '../../assets/img/LIkeButton.svg'

import classes from './SingleArticle.module.scss'
const SingleArticle = () => {
  const [isDelete, setDeletePost] = useState(false)
  const token = useSelector((state) => state.usersData.token)
  const user = useSelector((state) => state.usersData)
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    console.log('slug', slug)
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

  const deletePost = (token, slug) => {
    dispatch(fetchDeletePost(slug, token))
    setDeletePost(true)
  }

  if (!post) {
    return <Spin size="large" className={classes.SingleArticle__spin} />
  } else if (isDelete) {
    return <Alert type="error" message="Пост успешно удалён" className={classes.SingleArticle__deleteMessage} />
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
            <div className={classes.SingleArticle__accaountSection}>
              <div className={classes.SingleArticle__account}>
                <div className={classes.SingleArticle__accountTextInfo}>
                  <div className={classes.SingleArticle__autorsLogin}>{article.author.username}</div>
                  <div className={classes.SingleArticle__date}>{formatDate(article.updatedAt)}</div>
                </div>
                <img className={classes.SingleArticle__image} src={article.author.image} alt="ProfileImage" />
              </div>
              {user.username == article.author.username ? (
                <div className={classes.SingleArticle__buttons}>
                  <Popconfirm
                    title="Удаление поста"
                    description="Вы дйствительно хотите удалить пост?"
                    okText="Да"
                    cancelText="Нет"
                    onConfirm={() => deletePost(slug, token)}
                  >
                    <button className={classes.SingleArticle__deleteButton}>Delete</button>
                  </Popconfirm>
                  <Link to={`/article/${slug}/edit`}>
                    <button className={classes.SingleArticle__editButton}>Edit</button>
                  </Link>
                </div>
              ) : null}
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
