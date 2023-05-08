import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [ search, setSearch ] = useState("")

  let searchedPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleNewPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNew={handleNewPokemon}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
