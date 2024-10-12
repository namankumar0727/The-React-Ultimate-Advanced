import {useState} from "react"

const App = () => {

  const [movie,setMovie]=useState({
    title:"The Maze Runner",
    rating:19
  })

  const change=()=>{

   setMovie({...movie,rating:4})
  }

  
  return (
    <div>

      <h1>{movie.title}</h1>
      <h1>{movie.rating}</h1>

      <button onClick={change}>Change rating</button>
      
    </div>
  )
}
export default App