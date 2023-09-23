import { useState } from "react";
import './Desafio.css'

export default function Desafio(event) {
  const [posicao, setPosicao] = useState([])
  const [newList, setNewList] = useState([])
  const [all, setAll] = useState([])

  function handleClick(event) {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setPosicao((prev) => [...prev, newDot])
    setAll((prev) => [...prev, newDot])
  }

  function handleUndo(event) {
    event.stopPropagation()
    if (posicao[0]) {
      const newArray = posicao.pop()
      setNewList((prev) => [...prev, newArray])
    }
  }

  function handleRedo(event) {
    event.stopPropagation()
    if (newList[0]) {
      const newArray = newList.pop()
      setPosicao((prev) => [...prev, newArray])
    }
  }

  function handleUndoAll(event) {
    event.stopPropagation()
    if (newList[0] || posicao[0]) {
      setNewList([])
      setPosicao([])
    }
  }

  function handleRedoAll(event) {
    event.stopPropagation()
    setPosicao(all)

  }

  return (
    <div className="tela" onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      <button onClick={handleUndoAll}>Desfazer Tudo</button>
      <button onClick={handleRedoAll}>Refazer tudo</button>
      {posicao.map((item, index) => (
        <span key={index} className="dot" style={{ top: item.clientY, left: item.clientX }} />
      ))}
    </div>
  )
}