import axios from 'axios';
import { useState, createContext, useContext, useEffect } from 'react';

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
// const url = `https://www.omdbapi.com?apikey=22214b2e`;

console.log(API_ENDPOINT);

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState();

  const dataMovies = async (title) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}&s=${title}`);
      const data = await response.data.Search;
      setMovies(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataMovies('Batman');
  }, []);

  const values = {
    movies,
  };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMoviesContext };
