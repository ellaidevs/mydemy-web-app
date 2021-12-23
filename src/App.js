import './App.css'
import './page/login/SignInSide'
import SignInSide from './page/login/SignInSide'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/signup">singup</Link>
      <br></br>
      <Link to="/signin">singin</Link>
    </div>
  )
}

export default App
