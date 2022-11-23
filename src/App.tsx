import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main/Main'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
