import React, {useState, useEffect} from 'react'
import './App.css'
import Shades from './components/Shades'
import ShadeSearch from './components/ShadeSearch'
import randomColor from 'randomcolor'



function App() {

  const [color, setColor] = useState('#000')

  useEffect(() => {
    
    setColor(randomColor())

  }, [])

  return (
          <div className="App">
              <ShadeSearch  setColor={setColor}/>
              <Shades color={color} />
          </div>
  )

}

export default App;
