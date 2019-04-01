import DetailMoviesUseCase from './DetailMoviesUseCase'
import SearchMoviesUseCase from './SearchMoviesUseCase'
import MoviesRepositoriesFactory from '../Repositories/factory'

export default class MoviesUseCasesFactory {
  static detailMoviesUseCase = ({config}) =>
    new DetailMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository()
    })
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository: MoviesRepositoriesFactory.apiMoviesRepository()
    })
}
