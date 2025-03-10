import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useState } from 'react';
export default function BtnHeart() {
    const [isLike,setIsLike]= useState(false);
    
  return (
    <>

     <button style={{height:'30px', width:'30px'}} onClick={()=>setIsLike(!isLike)}>
   
        { isLike ? (<FaHeart />)
        :(<FaRegHeart />)}
      </button>
    </>
  )
}
