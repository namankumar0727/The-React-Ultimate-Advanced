import { useRef } from "react"

const App = () => {

  const inputelement=useRef(null)

  const focusinput=()=>{
    inputelement.current.focus();
    inputelement.current.value="Naman Kumar"
  }

  return (
    <div>

      <input type="text" ref={inputelement}/>
      <button onClick={()=>focusinput()}>Focus and write Naman</button>
      
    </div>
  )
}
export default App