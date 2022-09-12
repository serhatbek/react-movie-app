import React from 'react';
import Movies from '../../components/Movies/Movies';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
