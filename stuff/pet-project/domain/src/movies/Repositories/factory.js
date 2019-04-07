import {FetcherFactory} from '@s-ui/domain'
import ApiMoviesRepository from './ApiMoviesRepository'

import MoviesMappersFactory from '../Mappers/factory'

export default class MoviesRepositoriesFactory {
  static apiMoviesRepository = ({config}) =>
    new ApiMoviesRepository({
      config,
      fetcher: FetcherFactory.httpFetcher({config}),
      mapper: MoviesMappersFactory.moviesMapper({config})
    })
}
