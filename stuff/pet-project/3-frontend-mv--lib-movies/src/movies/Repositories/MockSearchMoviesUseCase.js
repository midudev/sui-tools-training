import {UseCase} from '@s-ui/domain'

class SearchMoviesUseCase extends UseCase {
  async execute({query}) {
    return Promise.resolve([
      {
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Title: 'The Avengers',
        Type: 'movie',
        Year: '2012',
        imdbID: 'tt0848228'
      },
      {
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
        Title: 'Avengers: Age of Ultron',
        Type: 'movie',
        Year: '2015',
        imdbID: 'tt2395427'
      },
      {
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        Title: 'Avengers: Infinity War',
        Type: 'movie',
        Year: '2018',
        imdbID: 'tt4154756'
      }
    ])
  }
}

export default SearchMoviesUseCase
