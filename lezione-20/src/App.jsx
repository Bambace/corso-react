import { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import Message from "./components/Message/Message";
import Section from "./components/Section/Section";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const firstName = {
    firstName: "Pippo",
    age: 99,
  };
  const [darkMode, setDarkmode] = useState(false);

  function handleClick(){
    setDarkmode(!darkMode)
  }

  return (
    <>
      {/* <Post/> */}

      <button onClick={handleClick}>{darkMode ? '☀️':'🌙'}</button>

      <UserContext.Provider value={firstName}>
        <ThemeContext.Provider value={darkMode}>
          <h1 className={darkMode ? 'dark' : 'light'}>Titolo</h1>
          <Section />
          <Message/>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
