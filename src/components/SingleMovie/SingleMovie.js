import './SingleMovie.scss';

const ghostImage = 'https://picsum.photos/seed/picsum/300/444';

console.log(ghostImage);

const SingleMovie = ({ movie }) => {
  const { Title, Poster, Year } = movie;

  return (
    <div className='movie-card'>
      <figure>
        <img src={Poster === 'N/A' ? ghostImage : Poster} alt={Title} />
      </figure>
      <div className='movie-card__info'>
        <h4>{Title}</h4>
        <h5>{Year}</h5>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default SingleMovie;
