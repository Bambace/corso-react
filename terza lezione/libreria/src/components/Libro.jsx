export default function Libro({
  titolo,
  autore,
  genere,
  nPagine,
  quantita,
  imagine,
  isAvaible,
}) {
  const isLowStock = quantita <= 3;

  const quantityStyle = {
    color: isLowStock ? "red" : "green",
    fontWeight: "bold",
    border: isLowStock ? "1px  solid red" : "1px solid green"
  };

  return (
    <>
      
          <p>Titolo: {titolo}</p>
          <p>Autore: {autore}</p>
          <p>Genere: {genere}</p>
          <p>Numero di Pagine: {nPagine}</p>
          {isAvaible ? (
            <p style={quantityStyle}>
              Quantitá: <b >{quantita}</b>
            </p>
          ) : (
            ""
          )}
       
      <div>
        <img width={100} src={imagine} alt="imagine libro" />
      </div>

      {!isAvaible && (
        <div style={{ backgroundColor: "red", borderRadius: "10px" }}>
          <p>
            <b>non disponibile</b>
          </p>
          {(quantita = "")}
        </div>
      )}
    </>
  );
}
