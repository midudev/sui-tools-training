import React from 'react'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import IndexRoute from 'react-router/lib/IndexRoute'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'
import App from './components/App'

const HomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const SearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Search" */ './pages/Search')
)

const DetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail')
)

export default (
  <Router>
    <Route component={App}>
      <Route path="/">
        <IndexRoute getComponent={HomePage} />
        <Route path="popular(/:page)" getComponent={HomePage} />
        <Route path="search(/:query)(/:page)" getComponent={SearchPage} />
        <Route path="movie/:id" getComponent={DetailPage} />
      </Route>
    </Route>
  </Router>
)
