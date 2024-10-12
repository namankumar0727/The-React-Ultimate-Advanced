import { useContext } from 'react'

import {Data,Data1} from './App'
const Component3 = () => {

  const name=useContext(Data)
  const age=useContext(Data1)
  return (
    <div>
     
     <h1>my name is {name} & my age is {age}</h1>
        
    </div>
  )
}
export default Component3