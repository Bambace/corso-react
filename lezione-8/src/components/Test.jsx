import { useState } from "react"



export default function Test() {
    const [count,setCount]= useState(0);

    function handleClick(){
        setCount(count+1);
    }


    function handleClick2(){
        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
    }
  return (
   <>

    <button onClick={handleClick2}>count: {count}</button>
   
   </>
  )

}
