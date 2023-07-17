import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Welcome Page</h3>
      <img src={reactLogo} alt="" />
      <br />
      <br />
      <Link to="/login" className='btn btn-success'>Login</Link>
      <Link to="/register" className='btn btn-primary'>Register</Link>
    </>
  )
}

export default App
