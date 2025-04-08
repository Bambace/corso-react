import "./TodoItem.css";


export default function TodoItem({item,children}) {
  return (
    <>
      <div className="todo">
        
        
        <p>{item.description}</p>


          {children}
         
      </div>
    </>
  );
}
