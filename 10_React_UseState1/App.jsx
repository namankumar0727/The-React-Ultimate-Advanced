import { useState } from "react";

const Counter=()=>{

  const [count,setCount]=useState(0)

  const increament=()=>{
    setCount(count+1);
  }

  const decreament=()=>{
    setCount(count-1);
  }
  return <>
  <h1>{count}</h1>
  <button onMouseOver={increament}>+</button>
  <button onMouseEnter={decreament}>-</button>
  </>
}

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}
export default App