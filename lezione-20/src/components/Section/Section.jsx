import {  useContext } from "react";
import Menu from "../Menu/Menu";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";


export default function Section() {

   const user = useContext(UserContext);
  // const isDark=  useContext(ThemeContext);
  return (
    <>

    {/* <div className={isDark ? 'dark' : 'light'}> */}
    <div>
        <h3>{user.firstName} ({user.age})</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorum?
        </p>
       
    </div>

    <Menu />
    </>
  )
}
