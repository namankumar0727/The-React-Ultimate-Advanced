import { useEffect,useState } from "react"

const App = () => {

  const [data,setData]=useState([])


  useEffect(()=>{

    async function getData(){
      const response=await fetch("https://jsonplaceholder.typicode.com/posts")

      const data=await response.json()

      if(data && data.length)
        setData(data);
    }
    getData()
  },[])

  // When the component get rendered for the first time the useEfect is executed at the starting

  return (
    <div>
      <ul>
        {data.map(item=>(
          <li key={Math.random}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default App