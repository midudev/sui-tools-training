import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import MoviesRepository from './MoviesRepository';

var ApiMoviesRepository =
/*#__PURE__*/
function (_MoviesRepository) {
  _inheritsLoose(ApiMoviesRepository, _MoviesRepository);

  function ApiMoviesRepository(_ref) {
    var _this;

    var fetch = _ref.fetch;
    _this = _MoviesRepository.call(this) || this;
    _this._fetch = fetch;
    return _this;
  }

  var _proto = ApiMoviesRepository.prototype;

  _proto.getDetail = function getDetail(_ref2) {
    var id = _ref2.id;
    return this._fetch("http://www.omdbapi.com/?apikey=520d55b7&i=" + id).then(function (res) {
      return res.json();
    });
  };

  _proto.getSearch = function getSearch(_ref3) {
    var query = _ref3.query;
    return this._fetch("http://www.omdbapi.com/?apikey=520d55b7&s=" + query).then(function (res) {
      return res.json();
    });
  };

  return ApiMoviesRepository;
}(MoviesRepository);

export { ApiMoviesRepository as default };