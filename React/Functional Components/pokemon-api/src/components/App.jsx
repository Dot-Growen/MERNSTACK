import React, {useState} from 'react';

function App() {

  const [pokemon, setpokemon] = useState([]);

  const catchEmAll = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=870')
    .then(response => {
      return response.json()
    }).then(response => {
      return setpokemon(response.results)
    }).then(response => {
      console.log(response)
    }).catch(err =>{
      console.log(err)
    })
    
    
    
  }

console.log("pokemon => " + pokemon )
  return (
    <div className="App w-25 mx-auto pt-5">
    <button className="btn btn-outline-primary" onClick={catchEmAll}>Catch'em All</button>
    <div>{pokemon.length > 0 ? pokemon.map((pokemon, index) =>{
      return (<li>{pokemon.name}</li>)
    }):null}</div>
    </div>
  );
}

export default App;

// Create a function that initiates fetch to the pokemon api
// create a button that has a synthetic event (onClick) that activates that functions\
// in the return: use a terneray operatoy to map out the pokemon as a list or return null 