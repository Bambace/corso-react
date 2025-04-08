import { FaEdit } from "react-icons/fa";
// import './BtnEdit.css'

export default function BtnEdit({ onClick, isEditing }) {
  return (
    <>
      <button 
        className={`edit ${isEditing ? 'editing' : ''}`} 
        onClick={onClick}
      >
        <FaEdit />
      </button>
    </>
  );
}