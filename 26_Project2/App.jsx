
import { useState } from 'react';
const App = () => {

  const [number,setNumber]=useState(0);

  const increament=()=>{

    setNumber(number+1)

  }
  const reset=()=>{
    setNumber(0)


  }
  const decreament=()=>{
    setNumber(number-1)




  }
  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10"></div>
      <h1 className='text-[#0398d4] font-medium text-2xl'>Increament or Decreament</h1>
    <div>
      <div>
        {number}
      </div>

      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        <button onClick={increament}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decreament}>-</button>
      </div>
      </div>
    </div>
  )
}
export default App