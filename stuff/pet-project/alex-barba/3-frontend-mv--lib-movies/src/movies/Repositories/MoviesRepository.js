import {Repository} from '@s-ui/domain'

export default class MovieRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }
  getResults() {
    throw new Error('[getResults] method must be implemented')
  }
  getMostPopularMovies() {
    throw new Error('[getMostPopularMovies] method must be implemented')
  }
  getHighestRatedMovies() {
    throw new Error('[getHighestRatedMovies] method must be implemented')
  }
}
