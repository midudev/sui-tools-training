import React from 'react'
import PropTypes from 'prop-types'

const Root = ({children}) => <div>{children}</div>
Root.propTypes = {
  children: PropTypes.element
}

export default Root
