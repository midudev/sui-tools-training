import MoviesRepository from './MoviesRepositories'

export default class MockSearchMoviesRepository extends MoviesRepository {
  constructor({mapper}) {
    super()

    this._mapper = mapper
  }

  getSearch({query}) {
    const response = [
      {
        poster:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        title: 'The Avengers',
        Type: 'movie',
        Year: '2012',
        imdbID: 'tt0848228'
      },
      {
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
        title: 'Avengers: Age of Ultron',
        Type: 'movie',
        Year: '2015',
        imdbID: 'tt2395427'
      },
      {
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        title: 'Avengers: Infinity War',
        Type: 'movie',
        Year: '2018',
        imdbID: 'tt4154756'
      }
    ]

    const mappedResponse = this._mapper.map(response)

    return Promise.resolve(mappedResponse)
  }
}
