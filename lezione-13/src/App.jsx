import { use, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoEditForm from "./components/TodoEditForm/TodoEditForm";
import { CiEdit } from "react-icons/ci";


function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), description: "fare la spesa" },
    { id: crypto.randomUUID(), description: "portare a passeggio il cane" },
    { id: crypto.randomUUID(), description: "studiare React" },
    { id: crypto.randomUUID(), description: "prenotare le vacanze" },
    { id: crypto.randomUUID(), description: "chiamare il dentista" },
    { id: crypto.randomUUID(), description: "fare la lavatrice" },
    { id: crypto.randomUUID(), description: "andare in palestra" },
    { id: crypto.randomUUID(), description: "preparare la cena" },
    { id: crypto.randomUUID(), description: "leggere un libro" },
    { id: crypto.randomUUID(), description: "organizzare l'armadio" },
    { id: crypto.randomUUID(), description: "scrivere una lettera" },
  ]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemID,setEditItemID]= useState(null);

  function handleclickEdit(id){
    setIsEditMode(true)
    setEditItemID(id)
  }

  function handleClickSave(){
    setIsEditMode(false)
    setEditItemID(null)
  }

  function handleChangeInput(value,editItemID){
   setTodos(()=>todos.map(t=> t.id === editItemID ? {...t, description:value} : t ))
  }

  return (
    <>
      <header>
        <h1>To Do List React v.2 </h1>
      </header>

      {isEditMode ? (
        <TodoEditForm  handleClickSave={handleClickSave}
        handleChangeInput={(value) => handleChangeInput(value,editItemID)}
        item={todos.find(t =>t.id === editItemID)}
        />
      ) : (
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.id} item={todo}>
              <div onClick={()=>handleclickEdit(todo.id)}>
                <CiEdit style={{ fontSize: "30px" }} />
              </div>
            </TodoItem>
          ))}
        </TodoList>
      )}
    </>
  );
}

export default App;
