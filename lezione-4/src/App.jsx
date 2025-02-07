import "./App.css";
import Card from "./components/Card";
import Libreria from "./components/Libreria";
import Libro from "./components/Libro";
import LibroImg from "./components/LibroImg";

function App() {
  const libri = [
    {
      id: 1,
      titolo: "Il Nome della Rosa",
      autore: "Umberto Eco",
      genere: "Mistero",
      pagine: 512,
      quantita: 5,
      imagen: "https://m.media-amazon.com/images/I/91sFibkjXaL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      titolo: "1984",
      autore: "George Orwell",
      genere: "Distopia",
      pagine: 328,
      quantita: 3,
      imagen: "https://example.com/1984.jpg"
    },
    {
      id: 3,
      titolo: "Il Signore degli Anelli",
      autore: "J.R.R. Tolkien",
      genere: "Fantasy",
      pagine: 1216,
      quantita: 7,
      imagen: "https://example.com/il-signore-degli-anelli.jpg"
    },
    {
      id: 4,
      titolo: "Orgoglio e Pregiudizio",
      autore: "Jane Austen",
      genere: "Romanzo",
      pagine: 432,
      quantita: 4,
      imagen: "https://example.com/orgoglio-e-prejudizio.jpg"
    },
    {
      id: 5,
      titolo: "Il Piccolo Principe",
      autore: "Antoine de Saint-Exupéry",
      genere: "Fiaba",
      pagine: 96,
      quantita: 10,
      imagen: "https://example.com/il-piccolo-principe.jpg"
    },
    {
      id: 6,
      titolo: "Don Chisciotte",
      autore: "Miguel de Cervantes",
      genere: "Avventura",
      pagine: 863,
      quantita: 2,
      imagen: "https://example.com/don-chisciotte.jpg"
    },
    {
      id: 7,
      titolo: "Moby Dick",
      autore: "Herman Melville",
      genere: "Avventura",
      pagine: 635,
      quantita: 6,
      imagen: "https://example.com/moby-dick.jpg"
    },
    {
      id: 8,
      titolo: "La Divina Commedia",
      autore: "Dante Alighieri",
      genere: "Poesia epica",
      pagine: 798,
      quantita: 1,
      imagen: "https://example.com/la-divina-commedia.jpg"
    },
    {
      id: 9,
      titolo: "Harry Potter e la Pietra Filosofale",
      autore: "J.K. Rowling",
      genere: "Fantasy",
      pagine: 336,
      quantita: 8,
      imagen: "https://example.com/harry-potter.jpg"
    },
    {
      id: 10,
      titolo: "Il Grande Gatsby",
      autore: "F. Scott Fitzgerald",
      genere: "Romanzo",
      pagine: 180,
      quantita: 5,
      imagen: "https://example.com/il-grande-gatsby.jpg"
    }
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
          <LibroImg/>
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
