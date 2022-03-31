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
  value: 67,
  misc: "golden"
}

function R03_example3() {
  return (
    <section className='App'>
      <ItemList name={item1.name} value={item1.value}></ItemList>
      <ItemList name={item2.name} value={item2.value}>The most basic block!</ItemList>
      <ItemList name={item3.name} value={item3.value} misc={item3.misc}></ItemList>
    </section>
  )
}

const ItemList = ({name, value, misc, children}) => {
  //const {name, value, misc} = props
  return (
    <article>
      <h3>{name}</h3>
      <h3>{value}</h3>
      <h3>{misc}</h3>
      <h3>{children}</h3>
      <br></br>
    </article>
  )
}

export default R03_example3