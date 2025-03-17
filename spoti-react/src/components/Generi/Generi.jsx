import { useState } from "react";

export default function Generi({ genero, description }) {
  const [isvisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="genero"  onMouseEnter={()=>setIsVisible(true)}
        onMouseLeave={()=>setIsVisible(false)}>

          {isvisible ? (
        <p>{description }</p>):
            
         (<h2 >{genero.genero}</h2>)}
    

        </div>
     </>
  );
}
