import './MovieData.css'

export default function MovieData({titolo,regista,durata,locandina}) {
  return (
    <>
    <div className='movie-data'>
    <h2> {titolo} </h2>
    <h3>{regista}</h3>
    <h3>(minuti {durata})</h3>
    <img src={locandina} alt="locandina: Inception" />
    </div>
    </>
  )
}
