import Header from './components/Header';
import './App.css'
import Test from './components/Test'
import Test2 from './components/Test2';

function App() {
  function handleClick() {
    alert('io sono una funzione in app.jsx');
  }

  return (
    <>

     {/* <Test onClickTest={handleClick} testo='button 1' messaggio='hey ciao!'/> */}
     {/* <Test testo='button 2' messaggio='hola!'/> */}
     {/* <Test2 onClickTest2={handleClick}/>
     <button onClick={handleClick}>button in app.jsx</button> */}
     
      <Header></Header>
    </>
  )
}

export default App
