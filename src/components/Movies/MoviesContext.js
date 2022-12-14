import axios from 'axios';
import { useState, createContext, useContext, useEffect } from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
// const url = `https://www.omdbapi.com?apikey=22214b2e`;

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('sonic');
  const [error, setError] = useState({ show: false, msg: '' });

  const dataMovies = async (title) => {
    setIsLoading(true);
    try {
      const response = await axios.get(title);
      const data = await response.data.Search;

      if (response.data.Response === 'True') {
        setMovies(data);
        setIsLoading(false);
        setError({ show: true, msg: '' });
      } else {
        setIsLoading(false);
        setError({ show: true, msg: response.data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  const values = {
    movies,
    isLoading,
    query,
    setQuery,
    dataMovies,
    error,
  };

  return (
    <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMoviesContext, API_ENDPOINT };
