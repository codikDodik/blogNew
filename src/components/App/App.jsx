import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ArticleList from '../ArticleList/ArticleList'
import Header from '../Header/Header'
import SingleArticle from '../SingleArticle'
import SignUp from '../AccountManagment/SignUp'
import SignIn from '../AccountManagment/SignIn'
import EditProfile from '../AccountManagment/EditProfile'
import CreateArticle from '../CreateArticle'
// import EditArticle from '../EditArticle'
// import NotFoundPage from '../NotFoundPage'

import classes from './App.module.scss'
console.log(classes)

function App() {
  return (
    <div className={classes.App}>
      <Header />

      <Router>
        <Route path="/" exact component={ArticleList} />
        <Route path="/:slug/b" component={SingleArticle} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/profile" exact component={EditProfile} />
        <Route path="/new-article" exact component={CreateArticle} />
        {/* <Route path="/articles/{slug}/edit" exact component={EditArticle} /> */}
      </Router>
    </div>
  )
}

export default App
