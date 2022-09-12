import { useMoviesContext } from './MoviesContext';

const Movies = () => {
  const { movies } = useMoviesContext();

  console.log('home', movies);
  return (
    <section className='movies'>
      <div className='container'>Movies</div>
    </section>
  );
};

export default Movies;
