import React, {useState} from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({router}) => {
  const [query, setQuery] = useState(null)

  const handleSubmit = Event => {
    Event.preventDefault()
    router.push(`/search/${query}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        onChange={Event => setQuery(Event.target.value)}
      />
    </form>
  )
}

SearchForm.propTypes = {
  router: PropTypes.object
}

export default SearchForm
