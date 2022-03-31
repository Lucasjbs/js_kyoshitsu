import React, {useState} from 'react'

const R04_example4 = () => {
  const [local, setLocal] = useState({
    name: "Westville",
    coordinates: "X816 Y042",
    continent: "America"
  })
  //Get all of the object previous properties by using the spread operator
  const changeLocation = () => {
    setLocal({
      ...local,
      name: "Eastville",
      coordinates: "X956 Y372"
    })
  }
  return(
    <React.Fragment>
      <h2>Use State with object</h2>
      <h4>Location: {local.name}</h4>
      <h4>Geographic Coordinates: {local.coordinates}</h4>
      <h4>Continent: {local.continent}</h4>
      <button type='button' className='btn btn-primary' onClick={changeLocation}>Change Location</button>
    </React.Fragment>
  )
}

export default R04_example4