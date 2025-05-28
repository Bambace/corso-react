import { useReducer } from "react";

export default function Counter2() {

  //objeto
  const initialState = { count: 0, min: 0, max: 0 };
//useReducer que tiene un estado, un dispatch(envio) dentro de userReducer tiene dos parametros counter reducer que es la funcion
// y initialState que es el objeto creado arriba
  const [state, dispatch] = useReducer(counterReducer,initialState); 

  //en la funcion tenemos 2 parametros un state (que es el estado) y el action (que son las acciones)
  function counterReducer(state, action) {
   

    //usamos un switch para decir que acciones existen y que van a hacer
    switch (action.type) {
      case "INCREASE_COUNTER": {
        const newCount = state.count + 1;
        return {...state, count: newCount, max: Math.max(newCount, state.max)};
      }

      case "DECREASE_COUNTER": {
        const newCount = state.count - 1;
        return { ...state, count: newCount, min: Math.min(newCount, state.min) };
      }

      case "RESET_COUNTER": {
        return { ...state, count: 0 };
      }

      default: {
        throw new Error("action type non valida" + action.type);
      }
    }
  }

  return (
    <>
      <p>Questo e il componente counter 2</p>

      <h1>{state.count}</h1>

      <button onClick={()=> dispatch({ type: 'DECREASE_COUNTER'})}>➖</button>
      <button onClick={()=> dispatch({ type: 'INCREASE_COUNTER'})}>➕</button>
      <button onClick={()=> dispatch({ type: 'RESET_COUNTER'})}>Reset </button>

      <hr />
 
      <p>max: {state.max}</p>
      <p>min: {state.min}</p> 
    </>
  );
}
