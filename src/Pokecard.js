import React, { Component } from "react";
import "./Pokecard.css";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name } = this.props;
    const pokemonIndex = (number) =>
      number <= 999 ? `00${number}`.slice(-3) : number;
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
    });
  }
  render() {
    // let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.state.name}</h1>
        <img src={this.state.imageUrl} alt={this.state.name} />
        {/* <img className="Pokemon" src={imageUrl} alt={this.state.name} /> */}
        {/* <img className="Pokemon" src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div> */}
      </div>
    );
  }
}

export default Pokecard;
