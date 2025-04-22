import { useEffect, useState } from "react"


export default function Converter() {
const[euros,setEuros]=useState(0);
const [pesos,setPesos]=useState(0);

useEffect(()=>{
    
    const tassa = 1357;
    setPesos(euros*tassa)

},[euros])

  return (

    <>
        <span>Euro: </span><input type="number"  value={euros} onChange={(e)=>setEuros(e.target.value)}/>

        <p>Pesos Argentinos: </p> <span>{pesos}</span>
    </>
  )
}
