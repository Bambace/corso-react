import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa"



export default function BtnDarkMode({isDarkMode,setDarkMode}) {

  
  return (
    <>
    <button  style={{marginBottom:'10px'}} onClick={()=>setDarkMode(!isDarkMode)}>

    {isDarkMode ? (
        <MdSunny style={{ width: "20px", height: "20px" }} />
      ) : (
        <FaMoon style={{ width: "20px", height: "20px" }} />
      )}

    </button>
      
      
    </>
  );
}
