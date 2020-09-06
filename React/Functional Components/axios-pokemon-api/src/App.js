import React, { useState } from 'react';
import axios from 'axios'

function App() {

  const [responseData, setResponseData] = useState([]);

  const catchEmAll = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
      setResponseData(response.data.results)
      console.log(response.data.results)
    })
  }





  return (
    <div className="App w-25 mx-auto pt-5">
      <button className="btn btn-outline-primary" onClick={catchEmAll}>Catch'em All</button>
      {responseData.length > 0 ? responseData.map((pokemon, index) => {
        return (<li>{pokemon.name}</li>)
      }) : null}
    </div>
  );
}

export default App;
