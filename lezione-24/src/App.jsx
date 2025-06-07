import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./assets/components/Counter/Counter";
import { ThemeContext } from "./context/ThemeContext";
import OthersComponents from "./assets/OthersComponents/OthersComponents";
import MainSection from "./assets/MainSection/MainSection";

function App() {
  //TODO inizializzare dark mode con quello che c'e nel local storage
  const [darkMode, setDarkMode] = useState((prev)=>{
  const darkMode = localStorage.getItem('darkMode');
  return darkMode==='true'? true : false;
  })


  useEffect(()=>{
    const darkMode= localStorage.getItem('darkMode');
    if(darkMode==='true')
      {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
  },[]);

  //effetto collaterale che scatta tutte le volte che l'utente 
  //desidera cambiare la dark mode e va a memorizzare nel local storage
  //il nuovo valore
  useEffect(()=>{
    localStorage.setItem('darkMode', darkMode)

  },[darkMode]);

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <section className={darkMode ? "dark-mode" : "light-mode"}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌕"}
          </button>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <Counter />
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          <MainSection/>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </section>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
