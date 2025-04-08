// import { IoMdAddCircle } from "react-icons/io";
// // import './BtnAdd.css'
// export default function BtnAdd({handleClick,inputList}) {
//   return (
//     <>

//     <button className="add" 
//     onClick={handleClick} 
//     disabled={inputList.trim()===""}>   <IoMdAddCircle  /></button>
//     </>
//   );
// }


import { IoMdAddCircle } from "react-icons/io";
// import './BtnAdd.css'

export default function BtnAdd({ handleClick, inputList, editingItem }) {
  return (
    <>
      <button 
        className="add" 
        onClick={handleClick} 
        disabled={inputList.trim() === ""}
      >
        {editingItem ? <span>Update</span> : <IoMdAddCircle />}
      </button>
    </>
  );
}