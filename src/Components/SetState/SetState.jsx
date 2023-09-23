import { useState } from "react"

export default function SetState() {

  const [texto, setTexto] = useState("Esse texto vai mudar")


  function MudarForma() {
    setTexto("Viu!!! O texto mudou sem precisar recarregar!!!")
  }

  return (
    <>
      <h1>{texto}</h1>
      <button onClick={MudarForma}>Clique aqui para mudar o texto acima</button>
    </>
  )
}