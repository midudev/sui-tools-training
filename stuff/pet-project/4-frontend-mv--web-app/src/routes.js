import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import Root from './Root'
import contextFactory from './contextFactory'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName:  'HomePage'  */ './pages/Home')
)

const loadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName:  'HomePage'  */ './pages/Detail')
)

export default (
  <Router>
    <Route component={Root}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        <Route path="detail/:id" getComponent={loadDetailPage} />
      </Route>
    </Route>
  </Router>
)
