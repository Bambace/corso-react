// import './Input.css'

export default function Input({inputList,setInputList}) {
  return (
    <>
 
    <label >Enter your item</label>
    <br />
    <input type="text" value={inputList} onChange={(e)=>setInputList(e.target.value)} />
    </>
  )
}
