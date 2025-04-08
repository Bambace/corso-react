import { FaCheck } from "react-icons/fa";
// import './BtnConfirm.css'

export default function BtnConfirm({item,toggleItemSelection}) {
  return (
    <>
      <button className="confirm" onClick={()=>toggleItemSelection(item)}>
        <FaCheck />
      </button>
    </>
  );
}
