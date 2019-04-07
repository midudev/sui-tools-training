import SearchMoviesUseCase from './SearchMoviesUseCase'
import MostPopularMoviesUseCase from './MostPopularMoviesUseCase'
import DetailMoviesUseCase from './DetailMoviesUseCase'
import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })

  static mostPopularMoviesUseCase = ({config}) =>
    new MostPopularMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })

  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository({config})
    })
}
