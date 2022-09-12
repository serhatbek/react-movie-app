import { useMoviesContext } from './MoviesContext';

const Movies = () => {
  const { movies } = useMoviesContext();

  console.log('home', movies);
  return (
    <section className='movies'>
      <div className='container'>
        {movies?.map((movie, index) => {
          const { Title, Poster, Year, imdbID } = movie;

          return (
            <div className='movie-card' key={index}>
              <figure>
                <img src={Poster} alt={Title} />
              </figure>
              <h4>{Title}</h4>
              <h5>{Year}</h5>
              <span>{imdbID}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
