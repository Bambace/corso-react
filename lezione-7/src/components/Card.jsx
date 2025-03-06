import InfoDetails from "./InfoDetails";
import { useState } from "react"

export default function Card({appCount,onAddClick,msg}) {

    
  return (
    <>
    <div>
        <h1>{appCount}</h1>
        <button onClick={()=>onAddClick(appCount+2)}>contatore: {appCount} e {msg}</button>
    
    
        <InfoDetails infoCounter={appCount} msg={msg}/>
    </div>
    </> 
  )
}
