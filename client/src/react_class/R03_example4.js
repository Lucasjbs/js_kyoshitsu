import React from 'react'

const allItems = [
{
  id: 1,
  name: "wood",
  value: 10
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
  misc: "crimson"
}]

function R03_example4() {
  return (
    <section className='App'>
      {allItems.map((data) => {
        return(
          <ItemList key={data.id} data={data}></ItemList>
        )
      })}
    </section>
  )
}
          //<ItemList key={data.id} {...data}></ItemList>
          //const {name, value, misc} = props
const ItemList = (props) => {
  const {name, value, misc} = props.data
  return (
    <article>
      <h3>{name}</h3>
      <h3>{value}</h3>
      <h3>{misc}</h3>
      <br></br>
    </article>
  )
}

export default R03_example4