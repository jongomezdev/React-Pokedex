import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import axios from "axios";

class Pokedex extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0`,
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
    console.log(res.data["results"]);
  }

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        {this.state.pokemon ? (
          <div className="Pokedex-cards">
            {this.state.pokemon.map((pokemon) => (
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
}

export default Pokedex;
