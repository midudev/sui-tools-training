import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

/* eslint-disable camelcase */
import { Mapper } from '@s-ui/domain';

var FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse =
/*#__PURE__*/
function (_Mapper) {
  _inheritsLoose(FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse, _Mapper);

  function FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse(_ref) {
    var _this;

    var config = _ref.config,
        repository = _ref.repository;
    _this = _Mapper.call(this) || this;
    _this._config = config;
    return _this;
  }

  var _proto = FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse.prototype;

  _proto.map = function map(apiResponse) {
    var _this2 = this;

    var mappedResponse = apiResponse.map(function (movie) {
      var original_title = movie.original_title,
          release_date = movie.release_date,
          poster_path = movie.poster_path,
          restOfResponse = _objectWithoutPropertiesLoose(movie, ["original_title", "release_date", "poster_path"]);

      return _objectSpread({
        title: original_title,
        year: release_date.substring(0, 4),
        image: "" + _this2._config.API_IMG_URL + poster_path
      }, restOfResponse);
    });
    return mappedResponse;
  };

  return FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse;
}(Mapper);

export { FromApiMoviesRepositorySearchReponseToMovieUseCaseReponse as default };