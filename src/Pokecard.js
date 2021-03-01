import React, { Component } from "react";
import "./Pokecard.css";
import { Link } from "react-router-dom";
// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon${pokemonIndex}.png?raw=true`;

// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    let pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${pokemonIndex}.png`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex,
    });
  }
  render() {
    // let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <Link to={`pokemon/${this.state.pokemonIndex}`}>
        <div className="Pokecard">
          <h1>
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h1>
          <img className="Pokemon" src={this.state.imageUrl} alt="" />

          {/* <img className="Pokemon" src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div> */}
        </div>
      </Link>
    );
  }
}

export default Pokecard;
