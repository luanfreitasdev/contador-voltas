import React, {useState, useEffect} from 'react'
import './App.css'

import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'


const App = props => {

  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning]     = useState (false)
  const [tempo, setTempo]         = useState(0)
  
  useEffect (() => {

    let timer = null
    if (running) {

      timer = 
          setInterval (() => {
            setTempo (old => old + 1)
          }, 1000)
  
    }

    return () => {
      if (timer) {
        clearInterval (timer)
      }
    }
    
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo (0)
  }

  const increment = () => {
    setNumVoltas (numVoltas + 1)
  }

  const decrement = () => {

    if (numVoltas > 0)
    setNumVoltas (numVoltas - 1)
  }


  return (
    <div className="App" >
      <MostraVoltas voltas={numVoltas}/>
     
      <Button className='bigger' text='+' onClick={increment} />
      <Button className='bigger' text='-' onClick={decrement} />
      <br />
      {

        numVoltas > 0 && 
        <MostraTempo tempo={ Math.round (tempo / numVoltas )}/>
      }
      
      <Button onClick={toggleRunning} text={ running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text='Reiniciar' />

    </div>
  );
}

export default App;
