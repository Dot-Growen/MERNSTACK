import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [colors, setColors] = useState([])

  function addColor(newColor) {
    setColors(prevColors => {
      return [...prevColors, newColor]
    })
    console.log(colors)
  }

  return (
    <div className="app">
      <ColorForm onAdd={addColor} />
      {colors.map((boxColor, index) => {
        return (
          <BoxDisplay
            key={index}
            id={index}
            color={boxColor}
          />
        )
      })}

    </div>
  );
}

export default App;
