import React from 'react'
import {Route, Router} from 'react-router'

import Root from './Root'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import contextFactory from './contextFactory'

const loadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail')
)

const loadSearchPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Search')
)

export default (
  <Router>
    <Route component={Root}>
      <Route path="/" getComponent={loadSearchPage} />
      <Route path="movie/:id" getComponent={loadDetailPage} />
    </Route>
  </Router>
)
