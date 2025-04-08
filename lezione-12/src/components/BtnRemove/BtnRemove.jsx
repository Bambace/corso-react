import { MdOutlineCancel } from "react-icons/md";
// import './BtnRemove.css'

export default function BtnRemove({onClickRemove,item}) {
  return (
    <>
    <button className="remove" onClick={()=>onClickRemove(item)}>
    <MdOutlineCancel />
    </button>
    </>
  )
}
