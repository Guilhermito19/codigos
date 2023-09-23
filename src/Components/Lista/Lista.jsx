export default function Lista({ itens }) {
  return (
    <>
      <h3>Lista:</h3>
      {itens.length > 0 ? (
        itens.map((item) => (
          <p>{item}</p>
        ))) : (
        <p>Nenhum componente na lista!</p>
      )}
    </>
  )
}