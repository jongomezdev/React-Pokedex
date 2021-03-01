import React, { Component } from "react";
import "./Pokecard.css";
import { Link } from "react-router-dom";

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
        </div>
      </Link>
    );
  }
}

export default Pokecard;
