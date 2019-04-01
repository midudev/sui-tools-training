import { EntryPointFactory } from '@s-ui/domain';
import GamesUseCasesFactory from './games/UseCases/factory';
var config = {
  API_ENDPOINT: 'https://shielded-hamlet-42041.herokuapp.com/api/'
};
var useCases = {
  detail_games_use_case: GamesUseCasesFactory.detailGamesUseCase({
    config: config
  })
};
var Domain = EntryPointFactory({
  useCases: useCases
});
export default new Domain();