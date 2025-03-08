import { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [film, setFilm] = useState({
    titolo:'',
    regista:'',
    anno:''
  });
  return (
    <>


      <button onClick={() => setCount(count + 1)}>count: {count}</button>

    <br />
    

      <br />
      <hr />
      <div>
        <h2>Film:</h2>
        <label>Titolo: </label>
        <input type="text" value={film.titolo} onChange={(e)=> setFilm({...film,titolo: e.target.value})} />
        <br />
        <br />
        <label>Regista: </label>
        <input type="text" value={film.regista} onChange={(e)=>setFilm({...film, regista:e.target.value})} />
        <br />
        <br />
        <label>Anno: </label>
        <input type="number" value={film.anno} onChange={(e)=> setFilm({...film, anno:e.target.value})}/>
        <br />
      </div>
    </>
  );
}
