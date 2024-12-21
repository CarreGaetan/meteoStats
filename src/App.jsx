import './App.css';
import Header from './Components/Header/Header';
// import Searchbar from './Components/SearchBar/SearchBar';
import Weather from './Components/Weather/Weather';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='Main'>
        {/* <Searchbar /> */}
        <Weather />
      </div>
    </div>
  );
}

export default App;
