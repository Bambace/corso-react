import "./Navbar.css";
import { GrSpotify } from "react-icons/gr";
import { FaReact } from "react-icons/fa";

export default function Navbar(setDarkMode) {
  return (
    <>
      <div className="nabvar">
       
        
        
         <h1><FaReact className="iconsNav" style={{padding:'5px'}} />
         Spoty-React
         <GrSpotify className="iconsNav"style={{padding:'5px'}} /> </h1>

       
        </div>
    </>
  );
}
