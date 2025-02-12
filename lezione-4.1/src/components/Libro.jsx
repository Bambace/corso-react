import Button from './Button';


export default function Libro({ libro }){
    return (
        <>

        <div className="libro-data">
            <p>
                <b>"{libro.titolo}"</b>
            </p>
            <p>
                Autor:<span> <i>{libro.autore}</i></span>
            </p>
            <p>Genero: <span>{libro.genere}</span>
            </p>
            <p>
                Numero di pagine: <span>{libro.pagine}</span>
            </p>
        
            {libro.isAviable ? (
                
                   
                    <Button libroTitolo={libro.titolo}>Buy book</Button>
                
            ) : (
                <div
                    style={{
                        backgroundColor:'yellow',
                        borderRadius:'5px',
                        marginTop:'5px',
                        textAligg:'center'
                    }}
                >
                    <p style={{ color:'red', fontWeight:'bold' }}>
                    this book is not yet aviable
                    </p>
                </div>

                   
            )}
        </div>
        </>

    )
}