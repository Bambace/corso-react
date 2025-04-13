import { useEffect, useState } from "react"


export default function UserList() {
const[users,setUsers]=useState([])

    useEffect(()=>{
        console.log('il componente UserList e stato renderizzato');
    }) 
    useEffect(()=>{
        console.log('il componente UserList e stato montato')

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json()) 
        .then(data=>{
            setUsers(data)      
            console.log(data)
        })

       // funzione di cleanup: eseguita quando il componente viene smontato 
        return()=>{
          console.log('il componente UserList e stato smontato');
          alert('non puoi piu vedere la lista utenti')
        }


    }, [])


  return (
    <>

    <h2>Lista Utenti</h2>
    
    {users.map(user =>
      (
        <p key={user.id}>{user.name}</p>
      )
    )}
   
    </>
  )
}
