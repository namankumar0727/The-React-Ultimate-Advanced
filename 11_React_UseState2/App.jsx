import { useState } from "react"

const Change=()=>{
  const [name,setName]=useState("Who is this");

  const changename=()=>{
    setName("Naman Ji")
  }
  return <>
  <h1>{name}</h1>
  <button onClick={changename}>Enter</button>
  </>


}

const App = () => {

  return (
    <div>
      <Change/>
    </div>
  )
}
export default App