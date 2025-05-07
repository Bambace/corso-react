import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2/Counter2'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Counter/> */}
   {/* <Counter2/> */}

   <Notification/>
    </>
  )
}

export default App
