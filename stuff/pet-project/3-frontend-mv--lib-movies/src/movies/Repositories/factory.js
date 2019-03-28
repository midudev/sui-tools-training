import ApiMoviesRepository from './ApiMoviesRepository'
import MockMoviesRepository from './MockMoviesRepository'

import MoviesMappersFactory from '../Mappers/factory'

import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = () => new ApiMoviesRepository({fetch})

  static mockMoviesRepository = () =>
    new MockMoviesRepository({
      mapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()
    })
}
