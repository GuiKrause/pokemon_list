import Image from "next/image";
import { useEffect, useState } from "react";

export default function Card({ pokemon, children }) {

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        async function getPokemon(name) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            console.log(data.sprites.front_default);
            setPhoto(data.sprites.front_default);
        }
        getPokemon(pokemon.name);
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg text-black">
            <img src={photo} alt={pokemon.name} width={200} height={200} className="m-auto rounded-lg" />
            <p className="p-2 text-center text-red-500 font-semibold bg-yellow-400">{children}</p>
        </div>
    );
}