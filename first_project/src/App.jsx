import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './home.jsx'
import Cv from './cv.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Home /> */}
        
        <Cv />
      </div>
    </>
  )
}

export default App
