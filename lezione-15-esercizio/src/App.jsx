import { useState } from 'react'

import './App.css'
import Counter from './components/counter/Counter'

function App() {
  const [isVisible, setIsVisible] = useState(false)
   const [count, setCount] = useState(0);

  return (
    <>

    <button onClick={()=>setIsVisible(!isVisible)}>mostra/nascondi</button>
    <br />
    <br />
    {isVisible && (<Counter count={count} setCount={setCount}/>)}
    
 
    </>
  )
}

export default App
