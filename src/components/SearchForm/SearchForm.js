import './SearchForm.scss';
import { useMoviesContext } from '../Movies/MoviesContext';

const SearchForm = () => {
  const { query, setQuery, dataMovies } = useMoviesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section-search'>
      <div className='container'>
        <form onSubmit={handleSubmit} className='search-form'>
          <input
            type='text'
            // value={query}
            name='search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' onClick={() => dataMovies(query)}>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
