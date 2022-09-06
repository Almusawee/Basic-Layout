import { useState } from 'react'
import {HiOutlineHome} from "react-icons/hi"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center bg-gray-200">
      <div className='mx-4 order-last'>
        <HiOutlineHome  className=' stroke-cyan-300 hover:stroke-cyan-700 ' size={100,100} />
      </div>
      <div className='mx-4 self-center text-center background-image:url(./assets/img.png)'>
      <h1 className='text-5xl py-1 font-bold text-blue-700'>Welcome to Almsawee Layout</h1>
      <h2 className='text-3xl py-2 font-semibold text-blue-300'>A premium website UI/UX designs</h2>
      <button className='my-4 px-4 py-2 border-2 border-transparent rounded-md text-white bg-blue-900 hover:animate-pulse animate-bounce hover:text-slate-900 hover:bg-sky-700 '>Learn more</button>
      </div>
    </div>
  )
}

export default App
