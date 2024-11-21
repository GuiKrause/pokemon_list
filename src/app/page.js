"use client";

import Card from "./components/Card.js";
import { useEffect, useState } from "react";

export default function Home() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    }
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1 className="m-4 text-4xl text-black font-medium">Pokemon List!</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {pokemon.map((poke, index) => (
          <Card pokemon={poke} key={index}>{poke.name}</Card>
        ))}
      </div>
    </div>
  );
}
