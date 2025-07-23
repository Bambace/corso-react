import { useNavigate, useParams } from 'react-router';
import './Detail.css';

export default function Detail({children, heroes}) {

    //recuperare l'id dell'eroe dalla url
    const {id} = useParams();  //useParams per leggere l'id dalla url, questo e una stringa

    //trovare gli atri dati dell'eroe (heroes,id), questo e un number

  //  const hero = heroes.find(h=>h.id.toString()===id.toString());
    const hero = heroes?.find(h => h.id.toString() === id.toString());

    //const per navigare tra pagine di react-router
    const navigate = useNavigate()


    return(
        <>
        {children}


            <div className='detail-card'>
                <p> <b> Nome:</b> {hero.name}</p>
                <p><b> eta:</b> {hero.age}</p>
                <p> <b> genere:</b> {hero.genre}</p>
                <img src={hero.img_url} alt={hero.name}/>
                <p> <b> poteri:</b> {hero.powers}</p>
                <p> <b> stato:</b> {hero.is_alive ? 'vivo' : 'morto'}</p>

            </div>

            <button className='btn' onClick={()=>navigate('/')}>Indietro</button>
            
        </>
    );
}