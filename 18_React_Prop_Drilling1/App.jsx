import Component1 from "./Component1"

//To solve this props drilling we use the context API

const App = () => {

  const name="Naman"
  return (
    <div>
      <Component1 name={name}/>
    </div>
  )
}
export default App