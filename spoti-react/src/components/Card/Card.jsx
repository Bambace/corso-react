
import BtnHeart from '../BtnHeart/BtnHeart'
import'./Card.css'


export default function Card({children}) {


  return (
    <>

    <div className='generi'>
      
      {children} 

     <BtnHeart/>
      
      
    </div>
    
    </>
  )
}
