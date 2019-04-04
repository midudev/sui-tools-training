import ApiMoviesRepository from './ApiMoviesRepository';
import MockMoviesRepository from './MockMoviesRepository';
import MoviesMappersFactory from '../Mappers/factory';
import fetch from 'isomorphic-fetch';

var MoviesRepositoriesFactory = function MoviesRepositoriesFactory() {};

MoviesRepositoriesFactory.apiMoviesRepository = function () {
  return new ApiMoviesRepository({
    fetch: fetch
  });
};

MoviesRepositoriesFactory.mockMoviesRepository = function () {
  return new MockMoviesRepository({
    mapper: MoviesMappersFactory.fromMockMoviesRepositoryDetailResponseToDetailUseCaseResponse()
  });
};

export { MoviesRepositoriesFactory as default };