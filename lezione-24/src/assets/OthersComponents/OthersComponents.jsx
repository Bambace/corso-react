import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"


export default function OthersComponents() {

    const {darkMode, setDarkMode}=useContext(ThemeContext);
    
  return (
    <>
    
    <p style={{color: darkMode ? 'red':'green'}}> ciao sono un OtherComponents.jsx</p>

    <button onClick={()=>setDarkMode(!darkMode)}>Cambia tema</button>
    </>
  )
}
