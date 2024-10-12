// Create context

import { createContext } from "react"
import Component3 from "./Component3"

// Creating instance of createcontext

export const Data=createContext()



const App = () => {

  // Wrap your data into provider component

  const name="Naman Kumar"
  return (
    <div>

      <Data.Provider value={name}>
        <Component3 />
      </Data.Provider>
      
    </div>
  )
}
export default App