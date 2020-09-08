import React, { useEffect, useState } from 'react';
import { Router, navigate } from '@reach/router'
import PlanetData from './components/PlanetData'
import PeopleData from './components/PeopleData'
import Index from './components/Index'


export default function App(props) {

  const [data, setData] = useState({})
  const [newInfo, setNewInfo] = useState({})

  const sendData = (data) => {
    setData(data.data)
  }

  const sendInfo = (info) => {
    setNewInfo(info)
  }

  if (newInfo.type === "people") {
    navigate(`/people/${newInfo.id}`)
  } else if (newInfo.type === "planets") {
    navigate(`/planets/${newInfo.id}`)
  }

  console.log(data.name)

  return (
    <Router>
      <Index onSendInfo={sendInfo} onSend={sendData} path="/" />
      <PeopleData
        name={data.name}
        height={data.height}
        mass={data.mass}
        hairColor={data.hair_color}
        skinColor={data.skin_color}
        onSendInfo={sendInfo}
        onSend={sendData}
        path="/people/:id" />
      <PlanetData
        name={data.name}
        climate={data.climate}
        terrain={data.terrain}
        surfaceWater={data.surface_water}
        population={data.population}
        onSendInfo={sendInfo}
        onSend={sendData}
        path="/planets/:id" />
    </Router>
  );
}

// Static version:
// obtain object from api
// build out UI for Component from bottom up
// display data on the components

// funcitonality:
// Use React Router to establish routes
// Use state to collect form data
// Access api with axios within useEffect
// Add state to useEffect second arguement to render when search is initiated
// customize website api with variables for the id and data point(i.e. planet/people) from the state
// 
// Use Effect to render data from custom edited api link variable