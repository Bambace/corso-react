export default function CounterNonFunzionante() {
    let count = 0;
    function handleClickAdd(){
        count += 1;
    }

  return (
    <>
    <div className=" counter counter-not-work">
    <h1>{count}</h1>
    <button onClick={()=>{handleClickAdd}}>Aggiungi</button>
    </div>
    </>
  )
}
