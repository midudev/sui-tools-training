import { EntryPointFactory } from '@s-ui/domain';
import MoviesUseCasesFactory from './movies/UseCases/factory';
var useCases = {
  detail_movies_use_case: MoviesUseCasesFactory.detailMoviesUseCase()
};
var config = {};
var Domain = EntryPointFactory({
  useCases: useCases
});
export default new Domain({
  config: config
});