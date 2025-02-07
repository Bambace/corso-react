import "./App.css";
import Card from "./components/Card";
import Libreria from "./components/Libreria";
import Libro from "./components/Libro";

function App() {
  const libri = [
    {
      id: 1,
      titolo: "Il Nome della Rosa",
      autore: "Umberto Eco",
      genere: "Mistero",
      pagine: 512,
      quantita: 5,
      
    },
    {
      id: 2,
      titolo: "1984",
      autore: "George Orwell",
      genere: "Distopia",
      pagine: 328,
      quantita: 3,
      
    },
    {
      id: 3,
      titolo: "Il Signore degli Anelli",
      autore: "J.R.R. Tolkien",
      genere: "Fantasy",
      pagine: 1216,
      quantita: 7,
      
    },
    {
      id: 4,
      titolo: "Orgoglio e Pregiudizio",
      autore: "Jane Austen",
      genere: "Romanzo",
      pagine: 432,
      quantita: 4,
    
    },
    {
      id: 5,
      titolo: "Il Piccolo Principe",
      autore: "Antoine de Saint-Exupéry",
      genere: "Fiaba",
      pagine: 96,
      quantita: 10,
     
    },
    {
      id: 6,
      titolo: "Don Chisciotte",
      autore: "Miguel de Cervantes",
      genere: "Avventura",
      pagine: 863,
      quantita: 2,
      
    },
    {
      id: 7,
      titolo: "Moby Dick",
      autore: "Herman Melville",
      genere: "Avventura",
      pagine: 635,
      quantita: 6,
      
    },
    {
      id: 8,
      titolo: "La Divina Commedia",
      autore: "Dante Alighieri",
      genere: "Poesia epica",
      pagine: 798,
      quantita: 1,
      
    },
    {
      id: 9,
      titolo: "Harry Potter e la Pietra Filosofale",
      autore: "J.K. Rowling",
      genere: "Fantasy",
      pagine: 336,
      quantita: 8,
      
    },
    {
      id: 10,
      titolo: "Il Grande Gatsby",
      autore: "F. Scott Fitzgerald",
      genere: "Romanzo",
      pagine: 180,
      quantita: 5,
      
    },
  ];
  

  const isFantasyFiltered = false;

  return (
    <>
      <Libreria>
       {libri
       .filter((libro)=>!isFantasyFiltered || libro.genere ==="Fantasy")
       .map((libro)=>(
        <Card key={libro.id}>
          <Libro
          titolo={libro.titolo}
          autore={libro.autore}
          genere={libro.genere}
          pagine={libro.pagine}
          quantita={libro.quantita} 
          />
        </Card>
       ))
       }
      </Libreria>
{/* 
      <div className="map">
        {libri.map((libro) => (
          <Card key={libro.id}>
            <Libro
              titolo={libro.titolo}
              autore={libro.autore}
              genere={libro.genere}
              pagine={libro.pagine}
              quantita={libro.quantita}
            />
          </Card>
        ))}
      </div> */}


      {/* <div className="filter">
          {libri
            .filter((libro) => libro.genere === "Fantasy")
            .map((libro) => (
              <Card key={libro.id}>
                <Libro
                  titolo={libro.titolo}
                  autore={libro.autore}
                  genere={libro.genere}
                  pagine={libro.pagine}
                  quantita={libro.quantita}
                />
              </Card>
            ))}
        </div> */}
    </>
  );
}

export default App;
