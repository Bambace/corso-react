import { useState } from "react";
import '../components/Card.css'


export default function Card({ title, description }) {
  const [visible, setVisible] = useState(false);

//   function handleMouseEnterleave(){
//     setVisible ? (!visible) : (visible)
//   }

  return (
    <>
      <div className="card"
       onMouseEnter={()=>setVisible(true)}
       onMouseLeave={()=>setVisible(false)}  >
        <h1>{title}</h1>
        {visible && (
        <h3>{description}</h3>)}
      </div>
    </>
  );
}
