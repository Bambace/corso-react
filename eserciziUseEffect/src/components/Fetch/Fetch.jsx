import { useEffect, useState } from "react";

export default function Fetch() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(()=>{ 
        setUsers(data);
        console.log("Componente Montato")},2000)
      
        
      });
  }, []);





  return (
    <>
      {/* {users ? users.map((u) => <p key={u.id}>{u.name}</p>) : "Loading"} */}
      {users
        ? users.results.map((u) => <p key={u.id}>{u.name}</p>)
        : "Loading..."}
    </>
  );
}
