import Button from './lezione-4.1/src/components/Button';

import './Card.css';

export default function Card({isAviable,children}){
    function handleClickDiv(e){
            e.stopPropagation();
            alert('Vedi descripzione')
    }
    
    
    
    
    return(
        <>
        <div onClick={handleClickDiv}
        className={
            isAviable ? 'libro-card card-active': 
            'libro-card card-inactive'
        }>
            {children}
        <Button/>
        </div>
        
        </>
    )
}