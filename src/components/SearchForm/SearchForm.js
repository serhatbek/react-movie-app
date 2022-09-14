import './SearchForm.scss';
import { useMoviesContext } from '../Movies/MoviesContext';

const SearchForm = () => {
  const { query, setQuery, error, dataMovies } = useMoviesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section-search'>
      <div className='container'>
        <form onSubmit={handleSubmit} className='search-form'>
          <input
            type='text'
            value={query}
            name='search'
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <button type='submit' onClick={() => dataMovies(query)}> */}
          <button type='submit'>Search</button>
        </form>
        {error.show && <div className='search-error'>{error.msg}</div>}
      </div>
    </section>
  );
};

export default SearchForm;
