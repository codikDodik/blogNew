import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ArticleList from '../ArticleList/ArticleList'
import Header from '../Header/Header'
import SingleArticle from '../SingleArticle'
import SignUp from '../AccountManagment/SignUp'
import SignIn from '../AccountManagment/SignIn'
import EditProfile from '../AccountManagment/EditProfile'
import CreateArticle from '../CreateArticle'
// import Post from '../post'
// import EditArticle from '../EditArticle'
// import NotFoundPage from '../NotFoundPage'

import classes from './App.module.scss'
console.log(classes)

function App() {
  return (
    <div className={classes.App}>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles" element={<ArticleList />} />

          <Route path="/:slug" element={<SingleArticle />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/new-article" element={<CreateArticle />} />
          {/* <Route path="/articles/{slug}/edit" element={<EditArticle />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
