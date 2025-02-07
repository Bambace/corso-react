import "./Card.css";


export default function Card({ children }){
    return(
        <>

               
        <div className="card">
            {children}
            
            <button className="btn">Comprare</button>
        </div>


        

        </>
    );


}
