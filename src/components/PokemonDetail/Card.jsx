import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Card({pokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: '',
        sprites: {front_default: ''},
        height: '',
        weight: '',
        types: [{type: {name: ''}}]
    });

    const datosPokemon = (url) => {
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            setOnePokemon(response.data)
        })
    }

    useEffect(() => {
        datosPokemon(pokemon.url);
    },[pokemon.url])

    return (
        <div style={{display: 'inline-block'}} className="mt-3">
            <div className='card m-3 'style={{'background-color': '#ffcb05', 'box-shadow': '10px 10px 5px black'}}>
                <div className='card-header' style={{'text-shadow': '3px 3px 3px black', "font-size":'3rem'}}>{onePokemon.name}</div>
                <div className='card-body'>
                <img src={onePokemon.sprites.front_default} alt="imagen-pokemon" style={{width: '10rem'}}></img>
                    <h1 className='card-text text-black' style={{'text-shadow': '4px 4px 2px white'}}>Datos Pokemon: </h1>
                    <p className='card-text ' style={{'text-shadow': '2px 2px 2px black'}}>Altura: {onePokemon.height} m</p>
                    <p className='card-text ' style={{'text-shadow': '2px 2px 2px black'}}>Peso: {onePokemon.weight} kg</p>
                    <p className='card-text ' style={{'text-shadow': '2px 2px 2px black'}}>Tipo: {onePokemon.types[0].type.name}</p>
                </div>
            </div>
        </div>
        )
}
