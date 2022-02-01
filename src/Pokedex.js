import React, { useEffect, useState } from "react";
import { Pokecard } from "./Pokecard";
import "./Pokedex.css";
import axios from "axios";

export const Pokedex = () => {

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`

  const [pokemon, setPokemon] = useState([])

  useEffect(async () => {
    const res = await axios.get(url);
    setPokemon(res.data["results"]);
    console.log(res.data["results"]);
  }, [])

  return (
    <div className="Pokedex">
      <h1>Pokedex!</h1>
      {pokemon ? (
        <div className="Pokedex-cards">
          {pokemon.map(pokemon => (
            <Pokecard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h1>Loading Pokemon</h1>
      )}
    </div>
  );
}