import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ChamadaApi() {

  const [imagem, setImagem] = useState()
  const [contador, setContador] = useState(1)



  useEffect(() => {
    axios('https://cat-fact.herokuapp.com/facts')
      .then((res) => {
        console.log(res.data)
      })
  }, [])



  return (
    <>
      <h1>Imagem:</h1>
    </>
  )

}