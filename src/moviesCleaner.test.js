import { moviesCleaner } from './moviesCleaner.js';

describe('moviesCleaner', () => {
  it('should return an array of cleaned objects', () => {
    const mockMovies = {
      "results": [
        {
          "vote_count": 1779,
          "id": 351286,
          "video": false,
          "vote_average": 6.6,
          "title": "Jurassic World: Fallen Kingdom",
          "popularity": 284.605,
          "poster_path": "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
          "original_language": "en",
          "original_title": "Jurassic World: Fallen Kingdom",
          "genre_ids": [
              28,
              12,
              878
          ],
          "backdrop_path": "/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg",
          "adult": false,
          "overview": "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
          "release_date": "2018-06-06"
        },
        {
          "vote_count": 414,
          "id": 363088,
          "video": false,
          "vote_average": 7.2,
          "title": "Ant-Man and the Wasp",
          "popularity": 187.081,
          "poster_path": "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
          "original_language": "en",
          "original_title": "Ant-Man and the Wasp",
          "genre_ids": [
              28,
              12,
              14,
              35,
              878
          ],
          "backdrop_path": "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg",
          "adult": false,
          "overview": "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
          "release_date": "2018-07-04"
        }
      ]
    };

    const expected = [
      {
        movie_id: 351286,
        title: "Jurassic World: Fallen Kingdom",
        poster_path: "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
        release_date: "2018-06-06",
        vote_average: 6.6,
        overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again."
      },
      {
        movie_id: 363088,
        title: "Ant-Man and the Wasp",
        poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
        release_date: "2018-07-04",
        vote_average: 7.2,
        overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions."
      }
    ];
    const result = moviesCleaner(mockMovies);
    expect(result).toEqual(expected);
  });
});