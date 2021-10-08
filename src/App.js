import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [who, setWho] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closedDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setWho(res.data)
    }).catch(err => {
      console.log(err);
    })
  },[])

  const Who = props => (
    <div className="charcter">
      {props.info.name}
      <button onClick={() => openDetails(props.info.id)}>
        see more
      </button>
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
      {
who.map(wh => {
  return <Who key={wh.id} info={wh} />
})
}
    </div>
  );
}

export default App;
