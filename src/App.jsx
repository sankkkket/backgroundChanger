import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  let myStyle = {
    backgroundColor: color
  }

  return (
    <>
    <div className='bodyy' style={myStyle}>
      <div  className='color-btn'>
        <button onClick={()=> setColor("red")} className='color-btnn btn-btn' type="button" class="btn btn-outline-primary">Red</button>
        <button onClick={()=> setColor("green")} className='color-btnn' type="button" class="btn btn-outline-primary">Green</button>
        <button onClick={()=> setColor("blue")} className='color-btnn' type="button" class="btn btn-outline-primary">Blue</button>
        <button onClick={()=> setColor("orange")} className='color-btnn' type="button" class="btn btn-outline-primary">Orange</button>
        <button onClick={()=> setColor("olive")} className='color-btnn' type="button" class="btn btn-outline-primary">Olive</button>
        <button onClick={()=> setColor("grey")} className='color-btnn' type="button" class="btn btn-outline-primary">Grey</button>
        <button onClick={()=> setColor("yellow")} className='color-btnn' type="button" class="btn btn-outline-primary">Yellow</button>
      </div>
    </div>  
    </>
  )
}

export default App
