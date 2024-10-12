import {Data} from './App'
const Component3 = () => {
  return (
    <div>
      <Data.Consumer>
    {
      (name=>{
        return <h1>My name is {name}</h1>
      })
    }
    </Data.Consumer>
        
    </div>
  )
}
export default Component3