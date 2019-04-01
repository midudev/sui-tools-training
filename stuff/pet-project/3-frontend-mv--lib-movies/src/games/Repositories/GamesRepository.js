import {Repository} from '@s-ui/domain'

export default class GamesRepository extends Repository {
  getDetail() {
    throw new Error('[getDetail] method must be implemented')
  }

  getRanking() {
    throw new Error('[getRanking] method must be implemented')
  }

  getSearch() {
    throw new Error('[getSearch] method must be implemented')
  }
}
