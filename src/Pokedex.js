import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import axios from "axios";

class Pokedex extends Component {
  // static defaultProps = {
  //   pokemon: [
  //     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     { id: 6, name: "Charizard", type: "fire", base_experience: 200 },
  //     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  //     { id: 8, name: "Wartortle", type: "water", base_experience: 120 },
  //     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  //     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  //     { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  //     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  //     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  //     { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  //   ],
  // };

  state = {
    url: `https://pokeapi.co/api/v2/pokemon/?limit=89&offset=10`,
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

      // <div className="Pokedex">
      //   <h1>Pokedex!</h1>
      //   <div className="Pokedex-cards">
      //     {this.props.pokemon.map((p) => (
      //       <Pokecard
      //         id={p.id}
      //         name={p.name}
      //         type={p.type}
      //         exp={p.base_experience}
      //       />
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default Pokedex;
