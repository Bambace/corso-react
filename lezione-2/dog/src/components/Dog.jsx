import './Dog.css'


export default function Dog() {



  const dog = {
    nome : "Pippo",
    colore: "Nero",
    razza:"Doberman",
    genere:"Maschio",
    annoDiNascita:1998,
    annoAttuale : 2025,
    imagine: 'https://media.istockphoto.com/id/1223511966/it/foto/bellissimo-pinscher-tedesco-marrone-e-nero.jpg?s=1024x1024&w=is&k=20&c=d_N-xQr7ltiLzj7MhIzlECt3JhqhFYihd4wKKS5bGVQ=',
        pstyle : {
           color: 'white',
           background:'black',
           border:'3px solid white',
           fontSize: '15px'
        }
};

  function getAge(annoAttuale, annoDiNascita) {
    return `eta: ${annoAttuale - annoDiNascita}`;
  }



  return (
    <>
      <div className='card'>
        <p style={dog.pstyle}>Nome: {dog.nome}</p>
        <p style={dog.pstyle}>Colore: {dog.colore}</p>
        <p style={dog.pstyle}>Razza: {dog.razza}</p>
        <p style={dog.pstyle}>Genero: {dog.genere}</p>
        <p style={dog.pstyle}>Eta: {getAge(dog.annoAttuale, dog.annoDiNascita)}</p>
        <img  width={300} src={dog.imagine} alt={dog.nome} />
      </div>
    </>
  );
}

