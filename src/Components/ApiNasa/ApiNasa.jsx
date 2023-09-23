import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"


export default function ApiNasa() {
  const apiUrl = 'https://rickandmortyapi.com/api';
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  let episodes;


  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        // Processar a resposta da API
        console.log(response.data);
        console.log('1')
        setData(response.data)
      })
      .catch(error => {
        // Lidar com erros
        console.error(error);
      });

    episodes = 'https://rickandmortyapi.com/api/episode'

    axios.get(episodes)
      .then(response => {
        // Processar a resposta da API
        console.log(response.data);
        console.log('2');
        setData2(response.data.results)
      })
      .catch(error => {
        // Lidar com erros
        console.error(error);
      });


  }, [])

  return (
    <>
      {data2.map((item, index) => (
        <p key={item.id}> item{item.name}{item.id} </p>
      ))}
    </>
  )
}

