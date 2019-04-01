import {EntryPointFactory} from '@s-ui/domain'
import GamesUseCasesFactory from './games/UseCases/factory'

const config = {
  API_ENDPOINT: 'https://shielded-hamlet-42041.herokuapp.com/api/'
}

const useCases = {
  detail_games_use_case: GamesUseCasesFactory.detailGamesUseCase({config}),
  ranking_games_use_case: GamesUseCasesFactory.rankingGamesUseCase({config}),
  search_games_use_case: GamesUseCasesFactory.searchGamesUseCase({config})
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
