import ApiGamesRepository from './ApiGamesRepository'
import MockGamesRepository from './MockGamesRepository'

import GamesMappersFactory from '../Mappers/factory'

import fetch from 'isomorphic-fetch'

export default class GamesRepositoriesFactory {
  static apiGamesRepository = () => new ApiGamesRepository({fetch})

  static mockGamesRepository = () =>
    new MockGamesRepository({
      mapper: GamesMappersFactory.fromMockGamesRepositoryDetailResponseToDetailUseCaseResponse()
    })
}
