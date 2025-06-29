import { isValidElement } from 'react'
import './Card.css'


export default function Card(props, isAvaible){
    return(
        <>
        <div className="card"
        style={{backgroundColor: !isAvaible && 'red'}}> 
        {/* <div className={isAvaible ? 'card card-base':'card card-rossa'}> */}
        {props.children}
         
        </div>
    

      
        </>
    )
}