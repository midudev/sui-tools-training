import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'

import Root from './Root'
// import HomePage from './pages/Home'
// import DetailPage from './pages/Detail'

import contextFactory from './contextFactory'
// import App from './components/App'

const loadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: 'HomePage' */ './pages/Home')
)

const loadDetailPage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: 'DetailPage' */ './pages/Detail')
)

export default (
  <Router>
    {/* Router es como poner Switch  */}
    <Route component={Root}>
      <Route path="/">
        <IndexRoute getComponent={loadHomePage} />
        {/* IndexRoute es como poner exact path */}
        <Route path="details/:gameId" getComponent={loadDetailPage} />
      </Route>
    </Route>
  </Router>
)
