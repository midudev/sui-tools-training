import DetailMoviesUseCase from './DetailMoviesUseCase';

var MoviesUseCasesFactory = function MoviesUseCasesFactory() {};

MoviesUseCasesFactory.detailMoviesUseCase = function () {
  return new DetailMoviesUseCase();
};

export { MoviesUseCasesFactory as default };