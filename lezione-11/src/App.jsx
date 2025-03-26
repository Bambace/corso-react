import { useState } from "react";

import "./App.css";
import Books from "./compontents/Books/Books";
import Test from "./compontents/Test/Test";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titolo: "il signore degli anelli" },
    { id: 2, titolo: "il miglio verde" },
    { id: 3, titolo: "origin" },
    { id: 4, titolo: "fantozzi" },
  ]);

  const filteredBooks = books.filter((b) => b.titolo.startsWith("i"));

  const [inputTitolo,setInputTitolo]=useState('');

  function handleClick(){
    //setBooks( //sovrascribi lo stato books
     // [ //sovrascrivi con un nuovo array 
        // ...books,//che contiene tutti gli elementi dal vechio array
        //  {id:crypto.randomUUID(), titolo:inputTitolo}
        // {id:5, titolo:inputTitolo} // il nuovo array con gli elementi precedenti piu in coda un nuovo ogetto
     // ]); 
    //como aggiungere un elemento in fondo al array

    //come aggiungere un elemento in cima al'array
     setBooks([{id:crypto.randomUUID(),titolo:inputTitolo},...books])
    
  };

  return (
    <>
      <label>Titolo: </label>
      <input type="text" value={inputTitolo} onChange={(e)=>setInputTitolo(e.target.value)} />
      <button onClick={handleClick}>Aggiungi</button>
      <br />
      <br />
      

      
      <hr />
      

      <h1>tutti i libri:</h1>

      {/* {books.map(b=>(
        <li key={b.id}>
          <span>{b.titolo}</span>
          <button onClick={()=>setBooks(books.filter(book=>book.id!==b.id))}>elimina</button>
          </li>
      ))} */}
       <Books books={books} onClickRemove={(id)=>setBooks(books.filter(book=>book.id !== id))}/> 

      {/* <hr /> */}

      {/* <h1>libri che iniziano con la 'i'</h1>
      <Books books={filteredBooks} /> */}


      <Test/>
    </>
  );
}

export default App;
