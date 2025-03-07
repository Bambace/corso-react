import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { GiH2O } from "react-icons/gi";
import Coffe from "./components/Coffe";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Count");
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <Input />


      <Coffe />

      <button onClick={() => setIsVisible(!isVisible)}> mostra/nascondi</button>

      {isVisible ? (
        <div>
          <h1>{count}</h1>
          <Counter
            onAddBtn={() => setCount(count + 1)}
            count={count}
            description={name}
            onChangeName={() => setName("pluto")}
          />
        </div>
      ) : (
        <h2>Non sei autorizato a vedere questa sezione</h2>
      )}
    </>
  );
}

export default App;
