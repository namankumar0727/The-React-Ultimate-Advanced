//First of all we have to import the particular file used for the useReducer
import { useReducer } from "react"

// State
//Dispatch:[value,setValue]

//Reducer:custom state logic
// initial state:{}

const App = () => {

  const [state,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={()=>dispatch({type:"increament"})}>+</button>
      <button onclick={()=>dispatch({type:"decreament"})}>-</button>
      <button onclick={()=>dispatch({type:"reset"})}>Reset</button>

    </div>
  )

  const initialstate={count:0}

  const reducer=(state,action)=>{
    switch(action.type){
      case "increament":
        return {
          ...state,
          count:state.count+1,
        };
        case "decreament":
        return {
          ...state,
          count:state.count-1,
        };
        case "reset":
        return {
          ...state,
          count:0,
        };

       default return state;
  }
}


export default App