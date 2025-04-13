import { useEffect,useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
useEffect(()=>{
    console.log('il componente e stato renderizzato');
}) 

useEffect(()=>{
  console.log(`hai clicato il counter ${count} volte `)
},[count])

  return (
    <>
    <button onClick={()=>setCount(count+1)}>Cliccami {count}</button>
    <p>io sono Counter.jsx</p>

    </>
  )
}
