import { useContext } from "react"
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";


export default function Message() {
  
  const userName = useContext(UserContext);
  const isDark = useContext(ThemeContext);
  return (
    <>
    <div className={isDark ? 'dark' : 'light'}>
    <p>Benvenuto {userName.firstName}  nel nostro sito!</p>
   </div>
    </>
  )
}
