import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test/Test'
import Fetch from './components/Fetch/Fetch'
import Clock from './components/Clock/Clock'
import Converter from './components/Converter/Converter'
import Timer from './components/Timer/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     {/* <Test/> */}

      <Fetch/>  

     {/* <Clock/>  */}

     {/* <Converter/>  */}

    {/* <Timer/> */}


    </>
  )
}

export default App
