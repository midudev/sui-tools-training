import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

const useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase(),
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase()
}

const Domain = EntryPointFactory({useCases})
export default new Domain()
