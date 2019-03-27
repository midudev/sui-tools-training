import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import match from 'react-router/lib/match'

import './styles.scss'

import routes from './routes'

const matchOptions = {routes, history: browserHistory}
const onMatch = (err, redirectLocation, renderProps) => {
  if (err) {
    console.error(err)
  }

  ReactDOM.render(<Router {...renderProps} />, document.getElementById('app'))
}

match(matchOptions, onMatch)
