import DetailMoviesUseCase from './DetailMoviesUseCase';
import SearchMoviesUseCase from './SearchMoviesUseCase';
import MoviesRepositoriesFactory from '../Repositories/factory';

var MoviesUseCasesFactory = function MoviesUseCasesFactory() {};

MoviesUseCasesFactory.detailMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new DetailMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository()
  });
};

MoviesUseCasesFactory.searchMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new SearchMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository()
  });
};

export { MoviesUseCasesFactory as default };