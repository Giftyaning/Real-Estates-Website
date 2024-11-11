import { useState } from 'react'
import"./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100 overflow-hidden'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default App
