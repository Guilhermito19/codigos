import { useEffect, useState } from 'react';
import axios from 'axios'
import './Desafio3.css'

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function Desafio3() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        console.log(response.data)
        setList(response.data.results)
      })
  }, [])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        console.log(response.data)
      })
  }, [])

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>



      <div>{list.map((item, index) => (
        <div className='pokemonCageMap'>
          <Pokemon key={index} data={item} />
        </div>
      ))}</div>
    </>
  );
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios
      .get(data.url)
      .then((response) => setDetails(response.data))
  }, [])

  if (details === null) {
    return;
  }

  return <div className='pokemonCage'>
    <img src={details.sprites.front_default} alt={details.name} style={{ width: 100, height: 100 }} />
    Pokemon: <b><strong>{details.name}</strong></b> - EXP: {details.base_experience}
  </div>
}


export default Desafio3;