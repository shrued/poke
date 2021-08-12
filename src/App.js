import React, { Component } from "react";
import Pokemon from "./components";
import { Container, Logo } from "./components/pokemon";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: [],
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          pokeData: response.results,
        });
      });
  }

  render() {
    const { pokeData } = this.state;

    return (
      <>
        <Logo
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Logo"
        />
        <Container>
          {pokeData.map((pokemon, index) => (
            <Pokemon key={pokemon.name} id={index + 1} pokemon={pokemon} />
          ))}
        </Container>
      </>
    );
  }
}
