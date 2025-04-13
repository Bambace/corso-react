import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import UserList from './components/UserList/UserList'

function App() {
 
  const [isVisible,setIsVisible]=useState(true)
  useEffect(()=>{
    console.log('il componente APP e stato renderizzato');
}) 

  return (
    <>

    
    
      <Counter/>

      <button onClick={()=>setIsVisible(!isVisible)}>mostra/nascondi utenti</button>

      {isVisible && (
        <UserList/>
      )}

      
    </>
  )
}

export default App
