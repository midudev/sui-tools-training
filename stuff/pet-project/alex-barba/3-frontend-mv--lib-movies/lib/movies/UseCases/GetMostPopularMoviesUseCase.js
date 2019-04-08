import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { UseCase } from '@s-ui/domain';

var GetMostPopularMoviesUseCase =
/*#__PURE__*/
function (_UseCase) {
  _inheritsLoose(GetMostPopularMoviesUseCase, _UseCase);

  function GetMostPopularMoviesUseCase(_ref) {
    var _this;

    var config = _ref.config,
        repository = _ref.repository;
    _this = _UseCase.call(this) || this;
    _this._config = config;
    _this._repository = repository;
    return _this;
  }

  var _proto = GetMostPopularMoviesUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this._repository.getMostPopularMovies());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function execute() {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return GetMostPopularMoviesUseCase;
}(UseCase);

export default GetMostPopularMoviesUseCase;