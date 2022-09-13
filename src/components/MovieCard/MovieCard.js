import './MovieCard.scss';
import { Link } from 'react-router-dom';

const ghostImage = 'https://picsum.photos/seed/picsum/300/444';

const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, imdbID } = movie;

  return (
    <div className='movie-card'>
      <figure>
        <img src={Poster === 'N/A' ? ghostImage : Poster} alt={Title} />
      </figure>
      <div className='movie-card__info'>
        <h4>{Title}</h4>
        <h5>{Year}</h5>
        <Link to={`/movies/${imdbID}`} className='link-btn'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
