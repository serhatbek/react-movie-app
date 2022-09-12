import { useMoviesContext } from './MoviesContext';
import './Movies.scss';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movies = () => {
  const { movies } = useMoviesContext();

  console.log('home', movies);
  return (
    <section className='section-movies'>
      <div className='container'>
        {movies?.map((movie, index) => {
          return <SingleMovie movie={movie} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
