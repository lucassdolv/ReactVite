import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import { Header } from './Components/Header'
import { Lista } from './Components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Header title="Projeto React" subTitulo= "Sistema"/>
        <Lista />
      </div>
     </>
  )
}

export default App
