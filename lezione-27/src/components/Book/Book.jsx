import { useEffect, useState } from 'react';
import './Book.css';

const url = 'https://bambace.github.io/fake-api-test-react/api/book.json';
export default function Book() {

    //primo creare uno stato che contiene i dati

    const [dataBook, setDatabook] =useState(null);

    //creare effetto collaterale per il fetch dei dati
    //che deve essere eseguito solo il primo render
    useEffect(()=>{
         getData();
    },[])

    //funzione per fare la fetch dei dati
    function getData(){
        fetch(url)
        .then(res =>res.json())
        .then(data =>
          {
            console.log(data);
            setDatabook(data);
         }
        )



    }
    

    return(
        <>
        {dataBook !=null ?(
            <div>
            <h2>{dataBook.title}</h2>
            <h3>{dataBook.autore.first_name} {dataBook.autore.last_name}</h3>
             </div>
        ):(
                <h1>Caricando dati!</h1>

        ) }
        </>
    );
}