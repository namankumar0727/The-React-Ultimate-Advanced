import { useState } from "react"

const App = () => {

  const [friends,setFriends]=useState(["Naman","Yash","Aman","Govind","SHubham"])

  const add=()=>{
    const newfriend=[...friends,'Padmesh']
    setFriends(newfriend)
    }
  const remove=()=>{
    
    setFriends(friends.filter(f=>f!='Naman'))
    
    }
  const update=()=>{
    
    setFriends(friends.map(f=>f=='Naman'?'Namanji':f))
    }


  return (
    <div>

      {friends.map(f=>(
        <li key={Math.random()}>{f}</li>
      ))
      }

      <button onClick={add}>Add</button>
      <button onClick={remove}>remove</button>
      <button onClick={update}>update</button>
            
    </div>
  )
}
export default App