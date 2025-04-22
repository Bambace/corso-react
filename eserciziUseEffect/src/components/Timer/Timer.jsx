import { useEffect, useState } from "react"

export default function Timer() {

    const[seconds,setSeconds] = useState(0)
    const[isActive,setIsActive] = useState(false)

    useEffect(()=>{
        let interval=null;
        
    if(isActive){
        interval = setInterval(()=>{
            setSeconds((prev)=> prev + 1);
        },1000);
    } else{
        clearInterval(interval)
    }

    return () => clearInterval(interval)
    },[isActive])


    const handleStart = ()=>setIsActive(true);
    const handleStop = ()=>setIsActive(false);
    const handleReset = ()=>{
        setIsActive(false);
        setSeconds(0)
    }

  return (
    <>

    <p> conto di secondi : {seconds}</p>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop} >Pausa</button>
    <button onClick={handleReset}>Stop</button>
    </>
  )
}
