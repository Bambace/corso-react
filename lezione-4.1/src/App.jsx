
import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import Libro from './components/Libro';
import LibroImage from './components/LibroImage'
function App() {
  const libri = [
    {
      id: 1,
      titolo: "Il Nome della Rosa",
      autore: "Umberto Eco",
      genere: "Mistero",
      pagine: 512,
      isAviable:true,
      imagen: "https://libreriathesauros.com/media/50/20240906_140523.jpg"
    },
    {
      id: 2,
      titolo: "1984",
      autore: "George Orwell",
      genere: "Distopia",
      pagine: 328,
      isAviable:true,
      imagen: "https://imagessl4.casadellibro.com/a/l/s7/94/9788423359394.webp"
    },
    {
      id: 3,
      titolo: "Il Signore degli Anelli",
      autore: "J.R.R. Tolkien",
      genere: "Fantasy",
      pagine: 1216,
      isAviable:false,
      imagen: "https://www.ibs.it/images/9788830119000_0_0_536_0_75.jpg"
    },
    {
      id: 4,
      titolo: "Orgoglio e Pregiudizio",
      autore: "Jane Austen",
      genere: "Romanzo",
      pagine: 432,
      isAviable:true,
      imagen: "https://www.feltrinellieditore.it/media/copertina/quarta/99/9788807895999_quarta.jpg.800x800_q75.jpg "
    },
    {
      id: 5,
      titolo: "Il Piccolo Principe",
      autore: "Antoine de Saint-Exupéry",
      genere: "Fiaba",
      pagine: 96,
      isAviable:false,
      imagen: "https://www.edizionianicia.it/wp-content/uploads/2017/11/p_7_9_7_797-Il-piccolo-principe.jpg"
    },
    {
      id: 6,
      titolo: "Don Chisciotte",
      autore: "Miguel de Cervantes",
      genere: "Avventura",
      pagine: 863,
      isAviable:true,
      imagen: "https://editriceilcastoro.it/wp-content/uploads/2014/09/9788880334804.jpg"
    },
    {
      id: 7,
      titolo: "Moby Dick",
      autore: "Herman Melville",
      genere: "Avventura",
      pagine: 635,
      isAviable:true,
      imagen: "https://copertine.hoepli.it/archivio/978/8836/9788836003662.jpg"
    },
    {
      id: 8,
      titolo: "La Divina Commedia",
      autore: "Dante Alighieri",
      genere: "Poesia epica",
      pagine: 798,
      isAviable:false,
      imagen: "https://www.ibs.it/images/9788854165069_0_0_536_0_75.jpg"
    },
    {
      id: 9,
      titolo: "Harry Potter e la Pietra Filosofale",
      autore: "J.K. Rowling",
      genere: "Fantasy",
      pagine: 336,
      isAviable:true,
      imagen: "https://www.salani.it/libri/harry-potter-e-la-pietra-filosofale-9788877827029/image_preview"
    },
    {
      id: 10,
      titolo: "Il Grande Gatsby",
      autore: "F. Scott Fitzgerald",
      genere: "Romanzo",
      pagine: 180,
      isAviable:true,
      imagen: "https://www.lafeltrinelli.it/images/9788807898020_0_0_536_0_75.jpg"
    }
  ];
  let isFantasyFiltered = false;

  const filteredlibros = isFantasyFiltered
  ? libri.filter((libro) => libro.genere ===
'Fantasy')
: libri;



  return (
    <>
      <Header/>

      <h2>{isFantasyFiltered ? 'Fantasy Books': 'All books'}</h2>
    
    {filteredlibros.map((libro)=>(
      <Card key={libro.id} 
      isAviable={libro.isAviable}>
        <Libro libro={libro}/>
        <LibroImage image={libro.imagen}/>
      </Card>
    ) )}
    </>
  )
}

export default App
