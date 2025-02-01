import Card from "./Card";
import Libro from "./Libro";

export default function Libreria(){
    return(
        <>

        
            <Card>
                <Libro
                    titolo={<b>Angeli e demoni</b>}
                    autore={<b>D. Brown</b>}
                    genere={<b>thriller</b>}
                    nPagine={<b>564</b>}
                    quantita={2}
                    isAvaible={true}
                    imagine={'https://m.media-amazon.com/images/I/91S346kK17L._UF1000,1000_QL80_.jpg'}
                
                />
            </Card>
            <Card>
                <Libro
                    titolo={<b>Il signore delgi anelli</b>}
                    autore={<b>J.R.R Tolkien</b>}
                    genere={<b>fantasy</b>}
                    nPagine={<b>1380</b>}
                    quantita={0}
                    isAvaible={false}
                    imagine={'https://www.lafeltrinelli.it/images/2570161050193_0_0_536_0_75.jpg'}
                
                />
            </Card>


            <Card>
                <Libro
                    titolo={<b>Il conte di Montecristo</b>}
                    autore={<b>A. Dumas</b>}
                    genere={<b>giallo</b>}
                    nPagine={<b>1260</b>}
                    quantita={1}
                    isAvaible={true}
                   imagine={'https://m.media-amazon.com/images/I/71B5yjD8LEL._AC_UF1000,1000_QL80_.jpg'}
                   />
             </Card>

            <Card>
                <Libro
                    titolo={<b>Il nome della rosa</b>}
                    autore={<b>U. Eco</b>}
                    genere={<b>giallo</b>}
                    nPagine={<b>623</b>}
                    quantita={8}
                 isAvaible={true}
                 imagine={'https://m.media-amazon.com/images/I/61Aa9Yic8AL._AC_UF1000,1000_QL80_.jpg'}
                
                />
            </Card>
            
        </>
    )
}