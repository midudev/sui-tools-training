import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  getMoviesBy() {
    throw new Error('[getMoviesBy] method must be implemented')
  }
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }
}
