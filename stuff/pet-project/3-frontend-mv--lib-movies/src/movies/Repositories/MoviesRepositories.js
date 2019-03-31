import {Repository} from '@s-ui/domain'

export default class MoviesRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }
  getSearch() {
    throw new Error('[getDetail] method must be implemented')
  }
}
