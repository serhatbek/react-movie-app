import { useMoviesContext } from './MoviesContext';
import './Movies.scss';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {
  const { movies, isLoading } = useMoviesContext();

  if (isLoading) {
    return <div class='lds-dual-ring'></div>;
  }

  return (
    <section className='section-movies'>
      <div className='container'>
        {movies?.map((movie) => {
          const { imdbID } = movie;
          return <MovieCard movie={movie} key={imdbID} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
