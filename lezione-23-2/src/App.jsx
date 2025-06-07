import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkmode,setDarkmode] = useState(false);
  const [msg, setMsg] = useState('');
useEffect(()=>{

  sessionStorage.setItem('test', 'Viva React')
  setMsg(sessionStorage.getItem('test'))

},[])

// useEffect(()=>{
//   sessionStorage.setItem('test', 'altro test')
// },[msg])

function handleClickAdd(){
  // sessionStorage.setItem('test','Viva React!');
  // setMsg(sessionStorage.getItem('test'));
  alert(sessionStorage.getItem('test'))
}
function handleClickShow(){}
function handleClickRemove(){
  // setMsg('');
  sessionStorage.clear();
}

function handleChange(e){
  sessionStorage.setItem('test', e.target.value);
  setMsg(e.target.value)
}

function handleTheme(){

  sessionStorage.setItem('darkMode', !darkmode) // es mejor en localStorage asi queda siempre en lo que elgio el usuario
  setDarkmode(!darkmode);


}


  return (


    <>

    <button onClick={handleTheme}>Cambia tema</button>
    <button onClick={handleClickAdd}>Crea</button>
    <button onClick={handleClickShow}>Mostra</button>
    <button onClick={handleClickRemove}>Elimina</button>


    <h1>{msg}</h1>
    <input type="text" value={msg} onChange={handleChange} />

    </>
  )
}

export default App
