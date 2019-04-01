import DetailGamesUseCase from './DetailGamesUseCase';

var GamesUseCasesFactory = function GamesUseCasesFactory() {};

GamesUseCasesFactory.detailGamesUseCase = function (_ref) {
  var config = _ref.config;
  return new DetailGamesUseCase({
    config: config
  });
};

export { GamesUseCasesFactory as default };