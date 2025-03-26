import './Books.css'

export default function Books({books,onClickRemove}) {
  return (
    <>
    <ul>
       {books.map(b=>(
        <li key={b.id}>
            <span>{b.titolo}</span>
         <button onClick={()=>onClickRemove(b.id)} >Rimuovi</button></li>
       ))}
    </ul>
    </>
  )
}
