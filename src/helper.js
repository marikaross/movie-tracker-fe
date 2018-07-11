export const moviesCleaner = (movies) => {

  const cleanMovies = movies.results.map( movie => {
    return {
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
      overview: movie.overview
    }
  });

  
  
}