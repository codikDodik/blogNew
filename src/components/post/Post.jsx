import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const Post = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://blog.kata.academy/api/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
  }, [])
  const { slug } = useParams()
  console.log(articles, slug)
  return (
    <div>
      {articles.map((post) => (
        <Link key={post.slug} to={`/articles/${post.slug}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  )
}
export default Post
