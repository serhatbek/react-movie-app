import { useMoviesContext } from './MoviesContext';
import './Movies.scss';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {
  const { movies, isLoading } = useMoviesContext();

  if (isLoading) {
    return <div className='loading'>Movies are loading...</div>;
  }

  return (
    <section className='section-movies'>
      <div className='container'>
        {movies?.map((movie) => {
          // console.log(movie);
          const { imdbID } = movie;

          return <MovieCard movie={movie} key={imdbID} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
