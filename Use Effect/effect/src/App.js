import "./App.css";
import { useState, useEffect } from 'react';


function App() {

    
  const [ömer, setÖmer] = useState(0);
  const [elif, setElif] = useState(0);

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz")
  },[])

  useEffect(() => {
    console.log("Her zaman çalışır")
  })

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır ve ömer değerinde bir değişiklik olduğunda çalışır")
  },[ömer])

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır ve elif değerinde bir değişiklik olduğunda çalışır")
  },[elif])

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır ve elif değerinde bir değişiklik olduğunda çalışır")
  },[elif, ömer])
  

  return <div className="App">
    <div className="firstDiv">
      <button onClick={() => setÖmer(ömer+1)}>Ömer ++</button>
      <div>Ömer: {ömer}</div>
    </div>
    <div>
      <button onClick={() => setElif(elif+1)}>Elif ++</button>
      <div>Elif: {elif}</div>
    </div>
  </div>;
}

export default App;
