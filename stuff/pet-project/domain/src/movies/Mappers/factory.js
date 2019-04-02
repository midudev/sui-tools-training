// import FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse from './FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse'
import MoviesMapper from './MoviesMapper'

import MovieEntitiesFactory from '../Entities/factory'

export default class MoviesMappers {
  static moviesMapper = ({config}) =>
    new MoviesMapper({
      config,
      movieEntity: MovieEntitiesFactory.movieEntity
    })

  // static fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse = () =>
  // new FromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()
}
