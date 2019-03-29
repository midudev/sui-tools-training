import ApiMoviesRepository from './ApiMoviesRepository'

import fetch from 'isomorphic-fetch'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = ({config}) =>
    new ApiMoviesRepository({fetch, config})
}
