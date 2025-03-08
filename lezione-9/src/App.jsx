import { useState } from "react";
import "./App.css";
import { use } from "react";
import Test from "./components/Test";
import Card from "./components/Card";
import Test2 from "./components/Test2/Test2";



function App() {
  // const utenti = [
  //   { id: 1, name: "Aldo" },
  //   { id: 2, name: "Luca" },
  //   { id: 3, name: "Mario" },
  //   { id: 4, name: "Paolo" },
  //   { id: 5, name: "Alessandro" },
  //   { id: 6, name: "Mike" },
  //   { id: 7, name: "Sara" },
  //   { id: 8, name: "Daniel" },
  //   { id: 10, name: "Marco" },
  //   { id: 11, name: "Max" },
  // ];
  // const [name,setUserName]= useState('');
  // const [password,setPassword]= useState('');
  // const [search, setSearch] = useState('');
  //stato unico
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // const filteredUtenti = utenti.filter(u =>
  //   u.name.toLowerCase().startsWith(search));

  return (
    <>
      {/* <p>cerca utente</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    {filteredUtenti.length > 0 ? ( 
      <ul>
        {filteredUtenti.map(u =>(
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>) :
      (<p>Usuario non trovato</p>)
    
  } */}

      {/* <Test />

      <br />
      <br />

      <label> username: </label>
      <input
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
            password: user.password,
          })
        }
      />
      <br />
      <br />
      <label>password: </label>
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <br />
      <br />

      <Card title="prima card" description="questa e la prima e unica super mega ultra card con una descrizione un po' lunga perche mi serve cosi e basta e stop." />
         */}

         <Test2/>
    </>
  );
}

export default App;
