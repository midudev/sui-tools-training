import {UseCase} from '@s-ui/domain'

class MostPopularMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()

    this._config = config
    this._repository = repository
  }

  async execute({query, page}) {
    const moviesList = await this._repository.getMostPopularMovies({page})
    const {actualPage, totalPages, totalResults, movies} = moviesList
    return {
      actualPage,
      totalPages,
      totalResults,
      movies: movies.map(movie => movie.toJSON())
    }
  }
}

export default MostPopularMoviesUseCase
