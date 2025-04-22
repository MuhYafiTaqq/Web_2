import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigasi from './components/Navigasi'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigasi />
      <Home />
      <div className='h-[5000px] bg-black'>

      </div>
    </>
  )
}

export default App
