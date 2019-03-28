import DetailMoviesUseCase from './DetailMoviesUseCase'

export default class MoviesUseCasesFactory {
  static detailMoviesUseCase = ({config}) => new DetailMoviesUseCase({config})
}
