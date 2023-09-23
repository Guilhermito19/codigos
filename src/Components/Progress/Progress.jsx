import React, { useState } from 'react'

const Progress = () => {

  const [lista, setLista] = useState([{ marcelo: 1 }, { marcelo: 2 }])

  return (
    <div>
      {lista.map((item, index) => (
        <Map item={item} index={index} />
      ))}
    </div>
  )
}

function Map({ index, item }) {
  return (
    <>
      Esse é o item:{item.marcelo}, e o index: {index}
    </>
  )
}

export default Progress