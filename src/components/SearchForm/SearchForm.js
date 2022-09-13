import './SearchForm.scss';

const SearchForm = () => {
  return (
    <section className='section-search'>
      <div className='container'>
        <form className='search-form'>
          <input type='text' name='search' />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
