import { useState } from "react"
import "../Style.css"

const Component = () => {

    const [number,setNumber]=useState(0);

    const increment=()=>{
        setNumber(number+1)
    }

    const decrement=()=>{
        setNumber(number-1)
    }

    
  return (
    <div className="container">
        <h1 className="number">{number}</h1>
        <div className="btns-container">

            <button className="increment" onClick={increment}>+</button>
            <button className="increment" onClick={decrement}>-</button>
            </div>
    </div>
  )
}
export default Component