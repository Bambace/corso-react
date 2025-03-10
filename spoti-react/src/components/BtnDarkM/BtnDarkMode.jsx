import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa"
import { useState } from "react";


export default function BtnDarkMode() {
  const [isDarkMode,setDarkMode]= useState(false)
  
  return (
    <>
    <button  onClick={()=>setDarkMode(!isDarkMode)}>

  { isDarkMode ? (<FaMoon />) : (<MdSunny />)
  }

    </button>
      
      
    </>
  );
}
