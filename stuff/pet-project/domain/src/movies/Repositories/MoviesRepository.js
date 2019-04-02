import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  getMoviesBy() {
    throw new Error('[getMoviesByQuery] method must be implemented')
  }
}
