import { useState } from "react"


export default function Input() {
const [username,setUserName] = useState('')
const [password,setPassowrd] = useState('')


function handleChangeName(e){
   //console.log(e.target.value)
    setUserName(e.target.value)
}

function handleChangePass(e){
    //console.log(e.target.value)
     setPassowrd(e.target.value)
 }
 
 function handleClick(e){
    console.log(e);
 }


  return (
   <>
   <label> username: </label>
   <input type="text" value={username} onChange={handleChangeName} />
    <br />
    <label>password: </label>
    <input type="password" value={password} onChange={handleChangePass} />
    <br />
    <button onClick={handleClick}> Click!</button>
   </>
  )
}
