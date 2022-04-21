import React from 'react'
import {ObjectArray} from './ObjectArray'

const R04_example3 = () => {

  const [item, setItem] = React.useState(ObjectArray)
  //Use State can also be called this way

  const removeItem = (id) => {
    let newItemList = item.filter((data) => data.id !== id)
    setItem(newItemList)
  }
  
  return(
    <React.Fragment>
      <h2>Use State with array</h2>
      <br></br>
      <h4>Items in the shop: </h4>
      {item.map((data) => {
        const {id, name, cost, type} = data

        return(
          <div key={id}>
            <h5>Name: {name}</h5>
            <h5>Price: {cost}G</h5>
            <h5>Type: {type}</h5>
            <button type='button' className='btn btn-warning' onClick={() => removeItem(id)}>Remove Item</button>
            <br></br>
            <br></br>
          </div>
        )
      })}
      <button type='button' className='btn btn-danger' onClick={() => setItem([])}>Remove All</button>
    </React.Fragment>
  )
}

export default R04_example3