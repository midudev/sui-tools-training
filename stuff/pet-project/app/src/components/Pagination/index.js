import React from 'react'
import PropTypes from 'prop-types'

import MoleculePagination from '@s-ui/react-molecule-pagination'

const Pagination = ({onSelectPage, actualPage, totalPages}) => {
  return (
    <div className="pagination">
      <MoleculePagination
        totalPages={totalPages}
        page={actualPage}
        showPages={totalPages > 5 ? 5 : totalPages}
        onSelectPage={onSelectPage}
        onSelectNext={onSelectPage}
        onSelectPrev={onSelectPage}
      />
    </div>
  )
}

Pagination.propTypes = {
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
  onSelectPage: PropTypes.func
}

export default Pagination
