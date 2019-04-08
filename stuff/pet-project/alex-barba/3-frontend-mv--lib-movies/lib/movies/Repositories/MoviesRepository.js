import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { Repository } from '@s-ui/domain';

var MovieRepository =
/*#__PURE__*/
function (_Repository) {
  _inheritsLoose(MovieRepository, _Repository);

  function MovieRepository() {
    return _Repository.apply(this, arguments) || this;
  }

  var _proto = MovieRepository.prototype;

  _proto.getDetail = function getDetail() {
    throw new Error('[getDetail] method must be implemented');
  };

  _proto.getResults = function getResults() {
    throw new Error('[getResults] method must be implemented');
  };

  _proto.getMostPopularMovies = function getMostPopularMovies() {
    throw new Error('[getMostPopularMovies] method must be implemented');
  };

  _proto.getHighestRatedMovies = function getHighestRatedMovies() {
    throw new Error('[getHighestRatedMovies] method must be implemented');
  };

  return MovieRepository;
}(Repository);

export { MovieRepository as default };