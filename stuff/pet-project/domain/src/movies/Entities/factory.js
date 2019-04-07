import MovieEntity from './MovieEntity'

class MoviesEntitiesFactory {
  static movieEntity = movie => new MovieEntity(movie)
}

export default MoviesEntitiesFactory
