import {UseCase} from '@s-ui/domain'

class DetailMoviesUseCase extends UseCase {
  constructor({config}) {
    super()
    this._config = config
  }

  async execute({id}) {
    return Promise.resolve({
      Title: "The Avengers: Earth's Mightiest Heroes",
      Year: '2010–2012',
      Rated: 'TV-Y7',
      Released: '22 Sep 2010',
      Runtime: '30 min',
      Genre: 'Animation, Action, Family, Sci-Fi',
      Director: 'N/A',
      Writer: 'N/A',
      Actors:
        "Eric Loomis, Colleen O'Shaughnessey, Brian Bloom, Rick D. Wasserman",
      Plot:
        "After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.",
      Language: 'English',
      Country: 'USA',
      Awards: '8 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
      Ratings: [{Source: 'Internet Movie Database', Value: '8.3/10'}],
      Metascore: 'N/A',
      imdbRating: '8.3',
      imdbVotes: '11,706',
      imdbID: 'tt1626038',
      Type: 'series',
      totalSeasons: '2',
      Response: 'True'
    })
  }
}

export default DetailMoviesUseCase
