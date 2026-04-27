import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 5;

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App
