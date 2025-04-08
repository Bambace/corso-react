import "./TodoEditForm.css";
import { FaSave } from "react-icons/fa";

export default function TodoEditForm({handleClickSave,item,handleChangeInput}) {
  return (
    <>
      <div className="edit-form">
        <label>Descrizione:</label>
        <input type="text" value={item.description} 
        onChange={(e)=>handleChangeInput(e.target.value)}  />

        <div onClick={handleClickSave}>
          <FaSave style={{ fontSize: "40px" }} />
        </div>
      </div>
    </>
  );
}
