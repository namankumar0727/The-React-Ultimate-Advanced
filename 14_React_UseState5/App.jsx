import {useState} from "react"

const App = () => {

  const [movie,setMovie]=useState([
    {id:1,title:"The SpiderMan 1",rating:1},
    {id:2,title:"The SpiderMan 2",rating:2},
    {id:3,title:"The SpiderMan 3",rating:3},
  ])


  const change=()=>{

    setMovie(movie.map(m=>m.id==1?{...movie,title:"The Maze Runner"}:m))

  }
  
  return (
    <div>

    {movie.map(m=>(
      <li key={Math.random()}>{m.title}</li>
    ))}

    <button onClick={change}>Change name</button>
      
      
    </div>
  )
}
export default App