import { useState } from "react";

export default function Generi({ genero, description }) {
  const [isvisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="genero"  onMouseEnter={()=>setIsVisible(true)}
        onMouseLeave={()=>setIsVisible(false)}>

          {isvisible ? (
        <span>{description }</span>):

         (<h2>{genero.genero}</h2>)}
    

        </div>
     </>
  );
}
