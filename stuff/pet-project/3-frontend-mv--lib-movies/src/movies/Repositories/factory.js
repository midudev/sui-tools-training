import ApiMoviesRepository from './ApiMoviesRepository'
import MockDetailMoviesRepository from './MockDetailMoviesRepository'
import MockSearchMoviesUseCase from './MockSearchMoviesUseCase'

import MoviesMappersFactory from '../Mappers/factory'

import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = () => new ApiMoviesRepository({fetch})

  static mockDetailMoviesRepository = () =>
    new MockDetailMoviesRepository({
      mapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()
    })
  static mockSearchMoviesRepository = () =>
    new MockSearchMoviesUseCase({
      mapper: MoviesMappersFactory.fromMockMoviesRepositorySearchResponseToDetailUseCaseResponse()
    })
}
