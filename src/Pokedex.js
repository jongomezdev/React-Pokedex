import React, { Component } from "react";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 4, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 4, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 4, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 4, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 4, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 4, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 4, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {}
}

export default Pokedex;
