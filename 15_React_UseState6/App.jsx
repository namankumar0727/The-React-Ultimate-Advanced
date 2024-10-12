import { useState } from "react"


const App = () => {

  const [username,setUsername]=useState("")

  const submit=(event)=>{

    event.preventDefault()
    alert(`you typed:${username}`)
    setUsername("")

  }

  const change=(event)=>{

    setUsername(event.target.value);

  }

  

  return (
    <div>
      <h1>Form Demo</h1>

      <form onSubmit={submit}>
        <input type="text" value={username} onChange={change}/>

        <button>Submit</button>

        
      </form>
    </div>
  )
}
export default App