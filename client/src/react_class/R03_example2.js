import React from 'react'

const item1 = {
  name: "wood",
  value: 12
}
const item2 = {
  name: "stone",
  value: 2
}
const item3 = {
  name: "helmet",
  value: 53,
  misc: "golden"
}

function R03_example2() {
  return (
    <section className='App'>
      <ItemList name={item1.name} value={item1.value}></ItemList>
      <ItemList name={item2.name} value={item2.value}></ItemList>
      <ItemList name={item3.name} value={item3.value} misc={item3.misc}></ItemList>
    </section>
  )
}

const ItemList = (props) => {
  return (
    <article>
      <h3>{props.name}</h3>
      <h3>{props.value}</h3>
      <h3>{props.misc}</h3>
      <br></br>
    </article>
  )
}

export default R03_example2