import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then((pokemon) => setPokemon(pokemon))
  }, [])

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function handleNewPokemon(newPoke) {
    setPokemon([...pokemon, newPoke])
  }

  const pokemonSearch = pokemon.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon={handleNewPokemon}/>
      <br />
      <Search onHandleSearch={handleSearch} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemonSearch} searchTerm={searchTerm}/>
    </Container>
  );
}

export default PokemonPage;
