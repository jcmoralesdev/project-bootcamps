import { useEffect, useState } from "react";
import axios from 'axios';
import DisplayPokemons from "./DisplayPokemons";

export default function ListPokemons(){

    const [pokemons, setPokemons] = useState([
        {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}
    ]);

    const traerPokemones = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((respuesta) => {
            setPokemons(respuesta.data.results);
        })
    }


  useEffect(() => {
    traerPokemones();
},[pokemons.length])
    
    return(
        <div className="container d-flex justify-content-center alig-items-center h-100">
            <div className="row">
                <DisplayPokemons pokemones={pokemons} />
            </div>
        </div>
    )
}


