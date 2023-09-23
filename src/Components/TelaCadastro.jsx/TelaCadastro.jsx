import { useState } from "react";
import './TelaCadastro.css'
function TelaCadastro() {

  const totalPorcent = 100;
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [data, setData] = useState({
    fullName: '',
    email: '',
    maritalStatus: '',
    genre: ''
  }
  )
  const toAdd = totalPorcent / Object.keys(data).length;

  function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    setData((prev) => {
      const newData = { ...prev, [name]: value }
      console.log(newData)
      return newData
    })
  }

  function calculateProgress() {
    let value = 0;



    if (data.fullName) {
      const stringExplode = data.fullName.split(' ')
      if (stringExplode[1]) {
        value += toAdd
      }
    }
    if (data.email) {
      if (pattern.test(data.email)) {
        value += toAdd
      }
    }
    if (data.maritalStatus) {
      value += toAdd;
    }
    if (data.genre) {
      value += toAdd;
    }

    return value;
  }

  function handleClick() {
    alert("Fórmulário enviado");
    setData({
      fullName: '',
      email: '',
      maritalStatus: '',
      genre: ''
    })
  }


  return (
    <div className='App'>
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container"><div className="bar" style={{ width: `${calculateProgress()}%` }}></div></div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input name="fullName" value={data.fullName} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='' >E-mail</label>
          <input name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name="maritalStatus" value={data.maritalStatus} onChange={handleChange}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name="genre" value="masculino" onChange={handleChange} checked={data.genre === "masculino"} />{' '} Masculino
            </span>
            <span>
              <input type='radio' name="genre" value="feminino" onChange={handleChange} checked={data.genre === "feminino"} />{' '} Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== totalPorcent}>Enviar Formulário</button>
      </main>
    </div>
  )
}

export default TelaCadastro;