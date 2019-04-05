import React from 'react'
import PropTypes from 'prop-types'

import SearchForm from '../SearchForm'

const Header = ({router}) => {
  return (
    <header className="header">
      <SearchForm router={router} />
    </header>
  )
}

Header.propTypes = {
  router: PropTypes.object
}

export default Header
