import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar'
import UserDetails from './component/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <UserDetails/>
    </>
  )
}

export default App
