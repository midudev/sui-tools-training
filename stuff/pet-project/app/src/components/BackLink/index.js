import React from 'react'
import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'

const BackLink = ({router}) => {
  return (
    <Button onClick={router.goBack} type="primary" negative>
      Go back
    </Button>
  )
}

BackLink.propTypes = {
  router: PropTypes.object
}

export default BackLink
