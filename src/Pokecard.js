import React from "react";
import "./Pokecard.css";
import { Link } from "react-router-dom";

export const Pokecard = ({name, url, ...props}) => {

  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const id = pokemonIndex.toString().padStart(3, "0");
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link to={`pokemon/${pokemonIndex}`}>
      <div className="Pokecard">
        <h1>
          {pokemonName}
        </h1>
        <img className="Pokemon" src={imageUrl} alt="" />
      </div>
    </Link>
  );
}