import './Dog.css'

export default function Dog({Nome, Colore,Razza,Genero,Eta,Imagine}){



  function getAge( annoDiNascita) {
    const annoAttuale = new Date().getFullYear();// esta funcion obtiene el anio actual.
    return ` ${annoAttuale - annoDiNascita}`;
  }
 

  return(
  <>
    <div className='card'>
       <p>Nome: {Nome}</p>
       <p>Colore: {Colore}</p>
       <p>Razza: {Razza}</p>
       <p>Genero: {Genero}</p>
       <p>Eta: {getAge(Eta)}</p>
       <img src={Imagine} alt="pluto" />
      </div>
  </>
)

}