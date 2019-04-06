import {EntryPointFactory} from '@s-ui/domain'
import MoviesUseCasesFactory from './movies/UseCases/factory'

import Config from './config'

const config = new Config()

const useCases = {
  search_movies_use_case: MoviesUseCasesFactory.searchMoviesUseCase({config}),
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase({config})
}

const Domain = EntryPointFactory({config, useCases})
export default new Domain()
