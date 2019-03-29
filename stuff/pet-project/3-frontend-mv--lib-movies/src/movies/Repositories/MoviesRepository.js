import {Repository} from '@s-ui/domain'

export default class MovieRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implementd')
  }
  getResults() {
    throw new Error('[getResults] method must be implementd')
  }
}
