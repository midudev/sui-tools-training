import ApiMoviesRepository from './ApiMoviesRepository'
import MoviesMappersFactory from '../Mappers/factory'
import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = ({config}) =>
    new ApiMoviesRepository({
      fetch,
      config,
      mapper: MoviesMappersFactory.fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse(
        {config}
      )
    })
}
