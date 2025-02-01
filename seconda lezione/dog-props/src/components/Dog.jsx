import './Dog.css'


export default function Dog(props) {



    function getAge( annoDiNascita) {
        const annoAttuale = new Date().getFullYear();// esta funcion obtiene el anio actual.
        return ` ${annoAttuale - annoDiNascita}`;
      }
    
    
    
      return (
        <>
          <div className='card'>
            <p>Nome: {props.nome}</p>
            <p>Colore: {props.colore}</p>
            <p>Razza: {props.razza}</p>
            <p>Genero: {props.genero}</p>
            <p>Eta:{props.eta ? getAge(props.eta) :'Anno di nascita non fornito' }</p>
            
            <img  width={300} src={props.imagine} alt={props.nome} />
          </div>
        </>
      );

//   const dog = {
//     nome ,
//     colore,
//     razza,
//     genere,
//     annoDiNascita,
//     annoAttuale : 2025,
//     imagine,
//         pstyle : {
//            color: 'white',
//            background:'black',
//            border:'3px solid white',
//            fontSize: '15px'
//         }
// };

 
}

