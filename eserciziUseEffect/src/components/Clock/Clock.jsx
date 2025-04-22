import { useEffect, useState } from "react"

export default function Clock() {

  const [currentDate,setCurrentDate] = useState(new Date())

  useEffect(()=>{
     const intervalId=setInterval(() => {
      setCurrentDate(new Date())
    }, 5000);


    return()=>{clearInterval(intervalId)}
  },[])

  return (
    <>

    <h3>{currentDate.toString()}</h3>
    
    </>
  )
}
