import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState('')
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    console.log('Testando')
    setUserEmail(email)
  }

  function limparEmail(e) {
    setUserEmail('')
  }

  return (
    <>
      <h2>Preencha o formulário</h2>
      <form >
        <input type="email" placeholder="Escreva seu email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={enviarEmail}>Enviar</button>
      </form>
      {userEmail && (
        <div>
          <p>Seu email foi guardado como {userEmail}</p>
          <button onClick={limparEmail}>Limpar email</button>
        </div>
      )
      }
    </>
  )
}