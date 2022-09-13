import './Home.scss';
import Movies from '../../components/Movies/Movies';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <main className='home'>
      <h1>MovieMania</h1>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
