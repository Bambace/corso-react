export default function Button({ type, name }) {
  function handleClickedit(e) {
    e.stopPropagation();
    alert("Stai modificando il contatto:" + name);
  }

  function handleClickDelete(e) {
    e.stopPropagation();
    alert("Stai eliminando il contatto: " + name);
  }

  function handleClickAddNew(e) {
    e.stopPropagation();
    alert("Stai aggiungendo un nuovo contatto: ");
  }

  return (
    <>
      {type === "edit" && (
        <span onClick={handleClickedit} className="material-symbols-outlined">
          edit
        </span>
      )}

      {type === "delete" && (
        <span onClick={handleClickDelete} className="material-symbols-outlined">
          delete
        </span>
      )}

      {type === "add" && (
        <span
        style={{
            backgroundColor:"red",
            color:"white",
            borderRadius:"50%",
            fontSize:"50px",
            marginBottom:"30px",
        }}
        
        onClick={handleClickAddNew} className="material-symbols-outlined">
          add
        </span>
      )}
    </>
  );
}
