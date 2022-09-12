import axios from 'axios';
import { useEffect } from 'react';

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
// const url = `https://www.omdbapi.com?apikey=22214b2e`;

console.log(API_ENDPOINT);

const dataMovies = async (title) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}&s=${title}`);
    const data = await response.data;
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Movies = () => {
  useEffect(() => {
    dataMovies();
  }, []);

  return <div>Movies</div>;
};

export default Movies;
