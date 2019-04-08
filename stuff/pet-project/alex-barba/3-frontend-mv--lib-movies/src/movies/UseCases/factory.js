import GetDetailMoviesUseCase from './GetDetailMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import GetMostPopularMoviesUseCase from './GetMostPopularMoviesUseCase'
import GetHighestRatedMoviesUseCase from './GetHighestRatedMoviesUseCase'
import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static getDetailMoviesUseCase = ({config}) =>
    new GetDetailMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
  static getMostPopularMoviesUseCase = ({config}) =>
    new GetMostPopularMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
  static getHighestRatedMoviesUseCase = ({config}) =>
    new GetHighestRatedMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
}
