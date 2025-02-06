export default function Libro({ titolo, autore, genere, nPagine, quantita,  }) {
  return (
    <>
      <p>Titolo: {titolo}</p>
      <p>Autore: {autore}</p>
      <p>Genere: {genere}</p>
      <p>Numero di pagine: {nPagine}</p>
      <p>Quantita: {quantita}</p>
   
    </>
  );
}
