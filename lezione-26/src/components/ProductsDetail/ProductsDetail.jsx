import { useParams } from 'react-router';
import './ProductsDetail.css';

export default function ProductsDetail() {
    //legge il parametro id dalla URL
    //lo memoriza nella variabile
    const{ id }= useParams();

    return(
        <>
            <h3>DETTAGLI DEL PRODOTTO:</h3>

            <p>ID prodotto: {id}</p>
        </>
    );
}