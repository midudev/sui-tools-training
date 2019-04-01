import GamesRepository from './GamesRepository'

export default class MockGamesRepository extends GamesRepository {
  constructor({mapper}) {
    super()

    this._mapper = mapper
  }

  getDetail({gameId}) {
    const response = {
      developers: [6055],
      genres: [1, 2],
      publishers: [3],
      alternates: [
        'The Hyrule Fantasy: Zeruda no Densetsu',
        'The Hyrule Fantasy: The Legend of Zelda',
        'The Legend of Zelda: The Hyrule Fantasy'
      ],
      reviews: [
        {
          _id: '5c939ea9f4ae4d00b65f6c31',
          text:
            ', unite the Triforce fragments and unravel the mystery of the Legend of Zelda!\n \n • Explore the vast Overworld terrain of the land of Hyrule and discover hidden treasures.\n • Explore the mystical labyrinths of the Underworld and ward-off ruthless enemies.',
          score: 5,
          title: 'Great game!',
          author: {
            _id: '5c9299c5d8591c00b665576e',
            desired: [],
            played: [],
            owned: [],
            reviews: [
              '5c9299e5d8591c00b665576f',
              '5c935a6e6c8f8d00b65625bb',
              '5c939ea9f4ae4d00b65f6c31',
              '5c939ed6f4ae4d00b65f6c32',
              '5c939efcf4ae4d00b65f6c33',
              '5c939f1af4ae4d00b65f6c34',
              '5c93afbaf4ae4d00b65f6c42'
            ],
            admin: false,
            username: 'Ury18',
            avatar: '10',
            name: 'Oriol',
            surname: 'Escolar',
            email: 'ury_98@hotmail.com',
            password:
              '$2b$10$BtCsDDyGCpE5q6tclQiz4.NncZQFo3WsFPJlnyci8eTGq7hm4Ntuq',
            __v: 7
          },
          game: '5c7c6a2876f55b77745b4af8',
          boxart: 'boxart/front/113-1.png',
          date: '2019-03-21T14:24:41.223Z',
          __v: 0
        },
        {
          _id: '5c93c71ff4ae4d00b65f6c45',
          text:
            'Triforce of Wisdom. But don’t despair. With a little luck and a lot of courage, you’ll conquer your adversaries, unite the Triforce fragments and unravel the mystery of the Legend of Zelda!\n \n • Explore the vast Overworld terrain',
          score: 4,
          title: 'Nice!',
          author: {
            _id: '5c93c6f3f4ae4d00b65f6c44',
            desired: [],
            played: [],
            owned: [],
            reviews: ['5c93c71ff4ae4d00b65f6c45', '5c93cce1f4ae4d00b65f6c46'],
            admin: false,
            username: 'david',
            avatar: '10',
            name: 'David',
            surname: 'Monreal',
            email: 'qwe@dxf.sa',
            password:
              '$2b$10$g6/NjJCbR1kLu4wRxABHv.P9EZSuWJsXdfmJnUp9gr/7ie4Q7BY3e',
            __v: 2
          },
          game: '5c7c6a2876f55b77745b4af8',
          boxart: 'boxart/front/113-1.png',
          date: '2019-03-21T17:17:19.154Z',
          __v: 0
        },
        {
          _id: '5c93d40ff4ae4d00b65f6c49',
          text: '',
          score: 2,
          title: '',
          author: {
            _id: '5c93d394f4ae4d00b65f6c47',
            desired: [],
            played: [],
            owned: [],
            reviews: ['5c93d3d0f4ae4d00b65f6c48', '5c93d40ff4ae4d00b65f6c49'],
            admin: false,
            username: 'manu',
            avatar: '10',
            name: 'manu',
            surname: 'barzi',
            email: 'manu@barzi.com',
            password:
              '$2b$10$.wqCQ5sf7bYBpgmN6sbrm.iObtb4SH/prghFCfDJ3DViDyKOPJ3DK',
            __v: 2
          },
          game: '5c7c6a2876f55b77745b4af8',
          boxart: 'boxart/front/113-1.png',
          date: '2019-03-21T18:12:31.167Z',
          __v: 0
        }
      ],
      id: 113,
      gameName: 'The Legend of Zelda',
      release_date: '1987-07-01',
      platform: [7],
      players: 1,
      overview:
        'Welcome to the Legend of Zelda.  Where the only sound you’ll hear is your own heart pounding as you race through forests, lakes, mountains and dungeonous mazes in an attempt to restore peace to the land of Hyrule.  Along the way you’ll be challenged by Tektites, Wizzrobes and an endless array of ruthless creatures who’ll stop at nothing to prevent you from finding the lost fragments of the Triforce of Wisdom.  But don’t despair.  With a little luck and a lot of courage, you’ll conquer your adversaries, unite the Triforce fragments and unravel the mystery of the Legend of Zelda!\r\n\r\n• Explore the vast Overworld terrain of the land of Hyrule and discover hidden treasures.\r\n• Explore the mystical labyrinths of the Underworld and ward-off ruthless enemies.',
      last_updated: '2018-08-11 15:01:11',
      rating: 'E - Everyone',
      coop: 'No',
      youtube: 'uI3rO3PbYOo',
      os: null,
      processor: null,
      ram: null,
      hdd: null,
      video: null,
      sound: null,
      finalScore: 3.6666666666666665,
      scores: [5, 4, 2],
      developerNames: ['Nintendo R&D4'],
      genreNames: ['Action', 'Adventure'],
      publisherNames: ['Nintendo'],
      platformName: ['Nintendo Entertainment System (NES)'],
      boxartUrl: 'boxart/front/113-1.png'
    }

    const mappedResponse = this._mapper.map(response)

    return Promise.resolve(mappedResponse)
  }
}
