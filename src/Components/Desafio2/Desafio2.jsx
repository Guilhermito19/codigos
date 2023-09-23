import './Desafio2.css'
import { login } from './util.js';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function Desafio2() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(null)
  const [isRequesting, setIsRequesting] = useState(false)

  function handleChange(event) {
    const { id, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [id]: value }
      return newData;
    })

  }

  function handleClick() {
    console.log(data)
    setIsRequesting(true)
    setError(null)

    login(data)
      .then(() => { alert("lOGIN EFETUADO COM SUCESSO!") })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsRequesting(false)
      })

  }

  function calculateProgress() {
    if (data.email && data.password.length >= 6 && isRequesting === false) {
      return false
    } else {
      return true;
    }
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form</h1>
        {error && (<div className='errorMessage'>
          {error.message}
        </div>)}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={data.email} onChange={handleChange} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={data.password} onChange={handleChange} />
        </div>
        <div className='button'>
          <button disabled={calculateProgress()} onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
  );
}
