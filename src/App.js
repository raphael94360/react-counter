import './App.scss';
import Header from './components/Header';
import Main from "./components/Main";
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  
  const handleCounter = (sign) => {
    if (sign === "+") {
      // setCounter(counter + 1);
      setCounter((prevState) => prevState + 1);
    } else if (sign === "-") {
      // setCounter(counter - 1);
      setCounter((prevState) => prevState - 1);
    }
  }


  return (
    <div className="container">
      <Header/>
      <Main counter={counter} handleCounter={handleCounter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
