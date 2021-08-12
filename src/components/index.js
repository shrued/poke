import React, { Component } from "react";
import { Card } from "antd";
import { PokeImg } from "./pokemon";

const { Meta } = Card;

export default class Pokemon extends Component {
  render() {
    const { pokemon, id } = this.props;
    return (
      <Card
        hoverable
        style={{
          margin: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 18%",
          justifyContent: "space-between",
        }}
        cover={
          <img
            alt="pokemon"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        }
      >
        <Meta
          style={{
            bottom: "0px",
          }}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        />
      </Card>
    );
  }
}
