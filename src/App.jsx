import { useState } from 'react'
import {HiOutlineHome} from "react-icons/hi"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex ">
      <div>
        <HiOutlineHome  className='' />
      </div>
      <h1>Wecome t NorthBy</h1>
      <h2>A premium in sight and sound</h2>
      <button>Learn more</button>
    </div>
  )
}

export default App
