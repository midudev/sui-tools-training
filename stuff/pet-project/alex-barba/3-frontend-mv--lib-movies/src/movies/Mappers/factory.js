import FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse from './fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse'

export default class MoviesMappers {
  static fromApiMoviesRepositorySearchReponseToMovieUseCaseReponse = ({
    config
  }) => new FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse({config})
}
