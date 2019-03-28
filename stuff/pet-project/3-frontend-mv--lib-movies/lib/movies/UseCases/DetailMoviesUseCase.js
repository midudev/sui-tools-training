import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import { UseCase } from '@s-ui/domain';

var DetailMoviesUseCase =
/*#__PURE__*/
function (_UseCase) {
  _inheritsLoose(DetailMoviesUseCase, _UseCase);

  function DetailMoviesUseCase() {
    return _UseCase.apply(this, arguments) || this;
  }

  var _proto = DetailMoviesUseCase.prototype;

  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref) {
      var id;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref.id;
              console.log({
                id: id
              });
              Promise.resolve({
                Title: "The Avengers: Earth's Mightiest Heroes",
                Year: '2010–2012',
                Rated: 'TV-Y7',
                Released: '22 Sep 2010',
                Runtime: '30 min',
                Genre: 'Animation, Action, Family, Sci-Fi',
                Director: 'N/A',
                Writer: 'N/A',
                Actors: "Eric Loomis, Colleen O'Shaughnessey, Brian Bloom, Rick D. Wasserman",
                Plot: "After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.",
                Language: 'English',
                Country: 'USA',
                Awards: '8 nominations.',
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
                Ratings: [{
                  Source: 'Internet Movie Database',
                  Value: '8.3/10'
                }],
                Metascore: 'N/A',
                imdbRating: '8.3',
                imdbVotes: '11,706',
                imdbID: 'tt1626038',
                Type: 'series',
                totalSeasons: '2',
                Response: 'True'
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function execute(_x) {
      return _execute.apply(this, arguments);
    }

    return execute;
  }();

  return DetailMoviesUseCase;
}(UseCase);

export default DetailMoviesUseCase;