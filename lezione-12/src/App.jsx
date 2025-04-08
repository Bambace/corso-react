import { useState } from "react";
import "./App.css";

import List from "./components/List/List";
import BtnAdd from "./components/BtnAdd/BtnAdd";
import Input from "./components/Input/Input";

function App() {
  const [shoppingList, setShoppinglist] = useState([]);
  const [inputList, setInputList] = useState("");
  const [selectedItemId, setSelectedItemId] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // Nuevo estado para el ítem en edición

  function handleClick() {
    if(inputList.trim() === "") {
      return;
    }
    
    if (editingItem) {
      // Si estamos editando, actualizamos el ítem
      setShoppinglist(shoppingList.map(item => 
        item.id === editingItem ? { ...item, list: inputList } : item
      ));
      setEditingItem(null)
    } else {
      // Si no, agregamos un nuevo ítem
      setShoppinglist([
        ...shoppingList,
        { id: crypto.randomUUID(), list: inputList },
      ])
    }
    setInputList("");
  }

  function toggleItemSelection(id) {
    setSelectedItemId(
      prevSelected => prevSelected.includes(id)
        ? prevSelected.filter(itemId => itemId !== id)
        : [...prevSelected, id]
    );
  }

  function handleEditItem(id, currentText) {
    setEditingItem(id); // Establecemos qué ítem estamos editando
    setInputList(currentText); // Llenamos el input con el texto actual
  }

  return (
    <>
      <h1>Shopping list:</h1>
    
      <Input inputList={inputList} setInputList={setInputList} />
      <BtnAdd 
        handleClick={handleClick} 
        inputList={inputList} 
        editingItem={editingItem} 
      />

      <List
        shoppingList={shoppingList}
        onClickRemove={(item) =>
          setShoppinglist(shoppingList.filter((i) => i.id !== item))
        }
        toggleItemSelection={toggleItemSelection}
        selectedItemId={selectedItemId}
        onEditItem={handleEditItem}
        editingItem={editingItem}
      />
    </>
  );
}

export default App;