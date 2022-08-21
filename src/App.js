import React, {useState} from "react"


function App() {
  const [count, setCount] = useState(0);


  function Increment(){
  setCount(count+1);
}

const Decrement = () => setCount(count-1);

const Reset = () =>setCount(0);


  return (
    <div className="counter">
      <h1 className = "heading">Counter</h1>
      <p className = "count">{count}</p>
      <button className = " btn increase" type = "submit" onClick = {Increment}>+</button>
      <button className = "btn decrease"  type = "submit" onClick = {Decrement}>-</button>
      <button className = "reset"  type = "submit" onClick = {Reset}>Reset</button>
      </div>
  );
}

export default App;
