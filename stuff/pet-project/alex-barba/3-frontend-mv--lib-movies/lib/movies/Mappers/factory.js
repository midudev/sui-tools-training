import FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse from './fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse';

var MoviesMappers = function MoviesMappers() {};

MoviesMappers.fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse = function (_ref) {
  var config = _ref.config;
  return new FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse({
    config: config
  });
};

export { MoviesMappers as default };