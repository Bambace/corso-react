


export default function Counter({onAddBtn, count,description, onChangeName}) {
    

  return (
    <>
        <button onClick={onAddBtn}>
            {description}: {count}
        </button>

        <button onClick={onChangeName}>cambia nome pulsante</button>
    </>
  )
}
