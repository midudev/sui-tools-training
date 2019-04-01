import DetailGamesUseCase from './DetailGamesUseCase'
import RankingGamesUseCase from './RankingGamesUseCase'
import SearchGamesUseCase from './SearchGamesUseCase'

import GamesRepositoriesFactory from '../Repositories/factory'

export default class GamesUseCasesFactory {
  static detailGamesUseCase = ({config}) =>
    new DetailGamesUseCase({
      config,
      repository: GamesRepositoriesFactory.apiGamesRepository()
    })

  static rankingGamesUseCase = ({config}) =>
    new RankingGamesUseCase({
      config,
      repository: GamesRepositoriesFactory.apiGamesRepository()
    })

  static searchGamesUseCase = ({config}) =>
    new SearchGamesUseCase({
      config,
      repository: GamesRepositoriesFactory.apiGamesRepository()
    })
}
