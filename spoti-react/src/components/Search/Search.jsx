// import Card from "../Card/Card";


// export default function Search({search,setSearch,filteredGenere}) {
//   return (
//     <>
    
//     <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

//    {/* {filteredGenere.length > 0 ? (<Card> <li key={g.id}>{g.search}</li> </Card>) : (<p>Genero non trovato</p>)} */}

   
//     </>
//   )
// }

export default function Search({ search, setSearch }) {
    return (
      <>
        {/* Input para buscar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar género..."
        />
      </>
    );
  }