import {UseCase} from '@s-ui/domain'

class SearchMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({query, page}) {
    const moviesList = await this._repository.getMoviesBy({query, page})
    const {actualPage, totalPages, totalResults, movies} = moviesList
    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(movie => movie.toJSON())
    }
  }
}

export default SearchMoviesUseCase
