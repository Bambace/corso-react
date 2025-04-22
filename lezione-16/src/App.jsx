import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User/User";

// const usersFromDB = [
//   { id: 1, name: "Pippo" },
//   { id: 2, name: "Jhon" },
//   { id: 3, name: "Jack" },
//   { id: 4, name: "Al" },
//   { id: 5, name: "Charlie" },
// ];


//https://jsonplaceholder.typicode.com/users
function App() {
  const [users, setUsers] = useState(null);
  const [filteredUser,setFilteredUser] = useState(null);
  const [search, setSearch] = useState('');

  //eseguire questa "finta fetch" solo quando il componente
  //viene montato da React

  useEffect(() => {
    // setTimeout(() => {
    //   setUsers(usersFromDB);
    // }, 2000);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setFilteredUser(data)
    })

  }, []);

  //eseguire questo filtro tutte le volte che lo stato search viene modificato
  useEffect( () => {
     //console.log('utente digita carattere')
    
     //se users e ancora null non fare ancora il use effect
     if(users === null) return; //si e null si blocca per quello va il return

  
    setFilteredUser(users.filter(user => user.name.toLowerCase().startsWith(search)));

  },  [search]);

  

  return (
    <>
      <input type="text" placeholder="search user by name"
      value={search}
      onChange={(e)=>setSearch(e.target.value)} />

      {filteredUser ? (
        filteredUser.map((user) => <User key={user.id} user={user} />)
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default App;
