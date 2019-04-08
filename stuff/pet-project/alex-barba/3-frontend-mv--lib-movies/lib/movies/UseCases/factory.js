import GetDetailMoviesUseCase from './GetDetailMoviesUseCase';
import SearchMoviesUseCase from './SearchMoviesUseCase';
import GetMostPopularMoviesUseCase from './GetMostPopularMoviesUseCase';
import GetHighestRatedMoviesUseCase from './GetHighestRatedMoviesUseCase';
import MoviesRepositoriesFactory from '../Repositories/factory';

var MoviesUseCasesFactory = function MoviesUseCasesFactory() {};

MoviesUseCasesFactory.getDetailMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new GetDetailMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository({
      config: config
    })
  });
};

MoviesUseCasesFactory.searchMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new SearchMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository({
      config: config
    })
  });
};

MoviesUseCasesFactory.getMostPopularMoviesUseCase = function (_ref3) {
  var config = _ref3.config;
  return new GetMostPopularMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository({
      config: config
    })
  });
};

MoviesUseCasesFactory.getHighestRatedMoviesUseCase = function (_ref4) {
  var config = _ref4.config;
  return new GetHighestRatedMoviesUseCase({
    config: config,
    repository: MoviesRepositoriesFactory.apiMoviesRepository({
      config: config
    })
  });
};

export { MoviesUseCasesFactory as default };