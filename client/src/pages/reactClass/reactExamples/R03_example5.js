import React from 'react'

const allItems = [
{
  id: 1,
  name: "wood",
  value: 10,
  misc: "warped"
},
{
  id: 2,
  name: "stone",
  value: 2
},
{
  id: 3,
  name: "helmet",
  value: 33,
  misc: "steel"
}]

function R03_example5() {
  return (
    <section className='App'>
      {allItems.map((data) => {
        return(
          <ItemList key={data.id} {...data}></ItemList>
        )
      })}
    </section>
  )
}

const ItemList = ({name, value, misc}) => {

  const clickHandler = () => {
    alert("Event Handler")
  }

  const displayMisc = (misc) => {
    console.log(misc)
  }

  return (
    <article>
      <h3 onClick={() => console.log(name)}>{name}</h3>
      <h3>{value}</h3>
      <h3>{misc}</h3>
      <button type='button' className='btn btn-dark' onClick={clickHandler}>Action Alert</button>
      <br></br>
      <button type='button' className='btn btn-secondary' onClick={() => displayMisc(misc)}>Console Log Misc</button>
      <br></br>
    </article>
  )
}                                                         //MUST BE AN ARROW FUNCTION

export default R03_example5