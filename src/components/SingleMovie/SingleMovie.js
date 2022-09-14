import './SingleMovie.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { API_ENDPOINT } from '../Movies/MoviesContext';

const SingleMovie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  const ghostImage = 'https://picsum.photos/seed/picsum/300/444';

  const fetchMovie = async (url) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;

      if (response.data.Response === 'False') {
        setIsLoading(false);
        setError({ show: true, msg: response.data.Error });
      } else {
        setMovie(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    Poster: poster,
    Title: title,
    Actors: actors,
    Plot: plot,
    Year: year,
    imdbRating: rating,
    Genre: genre,
  } = movie;

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${imdbID}`);
  }, [imdbID]);

  if (isLoading) {
    return (
      <div className='section-single-movie'>
        <div className='lds-dual-ring'></div>
      </div>
    );
  }

  if (error.show) {
    return (
      <div className='section-single-movie'>
        <h1 className='page-error'>{error.msg}</h1>
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className='section-single-movie'>
      <div className='single-movie'>
        <figure className='single-movie__img'>
          <img src={poster === 'N/A' ? ghostImage : poster} alt={title} />
        </figure>
        <div className='single-movie__info'>
          <h2>{title}</h2>
          <h4>{actors}</h4>
          <p>{plot}</p>
          <span>YEAR: {year}</span>
          <span>IMDB RATING: {rating}</span>
          <span>GENNRE: {genre}</span>

          <Link to={'/'} className='link-btn'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
