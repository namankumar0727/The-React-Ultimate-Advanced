import { useEffect,useState } from "react"

const App = () => {

  const [value,setValue]=useState(0)

  const change=()=>{
    setValue(value+1)
  }

  useEffect(()=>{

    if(value>0)

    console.log("Hello ")
    document.title=`Hello ${value}`
  },[value])

  // When the component get rendered for the first time the useEfect is executed at the starting

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={change}>CLick</button>
    </div>
  )
}
export default App