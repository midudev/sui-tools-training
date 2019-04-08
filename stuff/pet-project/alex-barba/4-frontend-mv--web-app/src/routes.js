import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import Root from './Root'

import contextFactory from './contextFactory'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const LoadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Detail')
)

const LoadSearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Search')
)

const LoadMostPopularMoviesPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/MostPopularMovies')
)

const LoadHighestRatedMoviesPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/HighestRatedMovies')
)

export default (
  <Router>
    <Route component={Root}>
      <Route path="/">
        <IndexRoute getComponent={LoadHomePage} />
        <Route path="search/:query" getComponent={LoadSearchPage} />
        <Route path="search/:query/detail/:id" getComponent={LoadDetailPage} />
        <Route
          path="most-popular-movies"
          getComponent={LoadMostPopularMoviesPage}
        />
        <Route
          path="highest-rated-movies"
          getComponent={LoadHighestRatedMoviesPage}
        />
      </Route>
    </Route>
  </Router>
)
