import ApiMoviesRepository from './ApiMoviesRepository';
import MoviesMappersFactory from '../Mappers/factory';
import fetch from 'isomorphic-fetch';

var MoviesRepositoriesFactory = function MoviesRepositoriesFactory() {};

MoviesRepositoriesFactory.apiMoviesRepository = function (_ref) {
  var config = _ref.config;
  return new ApiMoviesRepository({
    fetch: fetch,
    config: config,
    mapper: MoviesMappersFactory.fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse({
      config: config
    })
  });
};

export { MoviesRepositoriesFactory as default };