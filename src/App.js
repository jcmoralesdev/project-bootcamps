import './App.css';
import ListPokemons from './components/ListPokemons/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import Search from './components/SearchPokemon/Search';
import FilterBar from './components/FilterBar/FilterBar';

function App() {

  return (
    <div className="App">      
      <header className="App-header">
        <Navbar name="Pokedex" />
        <Search />
          <div>
            <FilterBar/>
          </div>     
        <ListPokemons/>
      </header>
    </div>
  );
}

export default App;
